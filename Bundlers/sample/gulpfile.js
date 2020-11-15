'use strict';

const
    { dest, src, watch, series, parallel } = require('gulp'),
    rename = require('gulp-rename'),
    path   = require('path'),
    del    = require('del'),

    config = {
        src:         './src/',
        dist:        './dist/',
        work:        './work/',    // Папка для обработки
        result:      './_result/', // Папка с   результатом обработки
        images:      'img',
        minimal:     '.min',
        indent_size: 1,
        indent_char: '	'
    },

    dir = {
        html:       config.src + 'html/',
        less:       config.src + 'less/',
        js:         config.src + 'js/',
        files:      config.src + 'files/',
        blocks:     config.src + 'blocks/',
        components: config.src + 'components/',

        dist: {
            folder: config.dist,
            js:     config.dist + 'js/',
            css:    config.dist + 'css/',
            img:    config.dist + config.images + '/',
            test:   config.dist + config.test + '/'
        }
    },

    files = {
            less: dir.less  + '*.less',
            html: dir.html  + '*.html',
            src:  dir.files + '**',
            js:   dir.js    + '*.js',

        dist:   {
            html: dir.dist.folder + '*.html',
            css:  dir.dist.css    + '*.css',
            js:   dir.dist.js     + '*.js',
            img:  dir.dist.img    + '**',
        },

        test: config.src + 'js/test/**/*.js',

        ignore: {
                html: '!' + dir.dist.folder + '*.' + config.test    + '.html',
                css:  '!' + dir.dist.css    + '*'  + config.minimal + '.css',
                js:   '!' + dir.dist.js     + '*'  + config.minimal + '.js',
                src:  '!' + dir.files       + '_*/**'
            },
            any:    '**/*.*'
    };


function webpack_dev() {
    const
        webpack = require('webpack'),
        webpackStream = require('webpack-stream');
    let webpackConfig = require('./webpack.config.js');
    webpackConfig.mode = 'development'; // production
    return src(files.js)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(dest(dir.dist.js));
}

function build_html() {
    const posthtml = require('gulp-posthtml'),
          include  = require('posthtml-include');
    // run task
    return src(files.html)
        .pipe(posthtml([ include({ root: dir.html, encoding: 'utf8' }) ]))
        .pipe(dest(dir.dist.folder))
}

function build_less() {
    const
        autoprefixer = require('autoprefixer'),
        postcss = require('gulp-postcss'),
        less = require('gulp-less');
    return src(files.less)
        .pipe(less({
            paths: [
                path.join(__dirname, 'src', 'less'),
                path.join(__dirname, 'node_modules'),
            ]
        }))
        .pipe(postcss([autoprefixer()]))
        .pipe(dest(dir.dist.css));
}

function dev_less() {
    const
        sourcemaps = require('gulp-sourcemaps'),
        autoprefixer = require('autoprefixer'),
        postcss = require('gulp-postcss'),
        less = require('gulp-less');
    return src(files.less)
        .pipe(less({
            paths: [
                path.join(__dirname, 'src', 'less'),
                path.join(__dirname, 'node_modules'),
            ]
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('./'))
        .pipe(dest(dir.dist.css));
}

function minify_css() {
    const cleanCSS = require('gulp-clean-css');
    return src(files.dist.css)
        .pipe(cleanCSS())
        .pipe(dest(dir.dist.css));
}

function beautify_html(src_arr, result_dir) {
    const beautify = require('gulp-beautify');
    return src(files.dist.html)
        .pipe(beautify.html({
            indent_size: config.indent_size,
            indent_char: config.indent_char
        }))
        .pipe(dest(dir.dist.folder));
}

function minify_img() {
    const img = require('gulp-imagemin');
    return src(config.work + '**/*.*')
        .pipe(img())
        .pipe(dest(config.result))
}

function svg_sprite(done) {
    const
        svgStore = require('gulp-svgstore'),
        svgmin = require('gulp-svgmin');
    return src(dir.files + '_svg/**')
        .pipe(svgmin(function (file) {
            return {
                plugins: [{
                    sortAttrs: false,
                    removeDesc: true,
                    removeTitle: true,
                    removeMetadata: false,
                    removeComments: true,
                    removeDimensions: true, // remove width/height and add viewBox
                    // removeAttrs: {
                    //     preserveCurrentColor: false,
                    //     attrs: ['fill']
                    // },
                    // cleanupIDs: {
                    //     prefix: '-',
                    //     minify: true
                    // }
                }]
            }
        }))
        // .pipe(rename({ prefix: 'svg__' }))
        .pipe(svgStore({ inlineSvg: true }))
        .pipe(rename(function (path) { path.basename = 'sprite'; }))
        .pipe(dest(dir.files + config.images));
}

function copy_files() {
    return src([files.src, files.ignore.src])
        .pipe(dest(dir.dist.folder));
}

function delete_dist() {
    return del(dir.dist.folder);
}

function test() {
    const mocha = require('gulp-mocha');
    return src([files.test], {read: false})
        .pipe(mocha())
//         .once('error', err => {
//             console.error(err);
//             process.exit(1);
//         })
//         .once('end', () => {
//             process.exit();
//         })
}

function watched() {
    watch(dir.components + '**/*.less', series(dev_less, minify_css));
    watch(dir.components + '**/*.html', series(build_html, beautify_html));
    watch([dir.components + '**/*.vue', dir.components + '**/*.js'], series(webpack_dev));

    watch(dir.blocks + '**/*.less', series(dev_less, minify_css));
    watch(dir.blocks + '**/*.html', series(build_html, beautify_html));
    watch([dir.blocks + '**/*.vue', dir.blocks + '**/*.js'], series(webpack_dev));

    watch(dir.less + files.any, series(dev_less, minify_css));
    watch(dir.html + files.any, series(build_html, beautify_html));
    watch(dir.js + files.any, series(webpack_dev));
    watch(dir.files + files.any, copy_files);
}

function server() {
    const broSync = require('browser-sync').create();
    broSync.init({
        watch: true,
        watchOptions: {
            ignoreInitial: true,
            ignored: '*.txt'
        },
        server: {
            index: "./index.html",
            baseDir: dir.dist.folder,
            directory: true
        }
    });
    watched();
}

// --- Exports ---
exports.html    = build_html;
exports.less    = build_less;
exports.copy    = copy_files;
exports.min_css = minify_css;
exports.min_img = minify_img;
exports.sprite  = svg_sprite;
exports.server  = server;
exports.test    = test;
exports.watch   = watched;
exports.webpack = webpack_dev;

exports.dev = series(
    delete_dist, parallel(
        series(build_html, beautify_html),
        series(dev_less),
        copy_files
    )
);

exports.build = series(
    delete_dist, parallel(
        series(build_html, beautify_html),
        series(build_less, minify_css),
        copy_files
    )
);
