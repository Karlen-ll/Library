const
    path = require('path'),
    CopyPlugin = require('copy-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    devtool: 'eval-source-map',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CopyPlugin({
            patterns: [
                './src/asset/',
                './src/html/',
                // { from: 'src/asset', to: 'dist' },
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            },{
                test: /\.html$/i,
                loader: 'html-loader',
                options: { minimize: false }
            },{
                // CSS стили
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },{
                // Препроцессор SASS
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },{
                // Изображения
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },{
                // Шрифты и SVG
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },
        ]
    }
};