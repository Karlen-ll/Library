# Favicon

* [Windows](#Windows)
* [iOS](#iOS)
* [Android](#Android)
* [Links](#Links)

---

```html
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
```


## Windows

```html
<meta name="msapplication-TileImage" content="images\tileimage.jpg">
```

Иконки для плиток:
```html
<meta name="msapplication-square70x70logo"   content="images/smalltile.png">
<meta name="msapplication-square150x150logo" content="images/mediumtile.png">
<meta name="msapplication-wide310x150logo"   content="images/widetile.png">
<meta name="msapplication-square310x310logo" content="images/largetile.png">
```

```html
<meta name="msapplication-TileColor" content="#009900">
<meta name="application-name" content="Имя">
<meta name="msapplication-tooltip" content="Подсказка">
<meta name="msapplication-starturl" content="./адрес сайта">
```

Подробнее о файле конфигураций `browserconfig.xml` и о возможности создания живых плиток:
* [Habr: Favicon](https://habr.com/ru/post/330584/)
* [Windows Docs](https://docs.microsoft.com/ru-ru/previous-versions/windows/internet-explorer/ie-developer/samples/dn456348(v=vs.85)?redirectedfrom=MSDN)


## iOS

```html
<link rel="mask-icon" href="safari-pinned-tab.svg" color="#00а0ff">
```

```html
<link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png">

<meta name="apple-mobile-web-app-title" content="Заголовок">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

Не забыть разместить в корне сайта файлы:
* `apple-touch-icon-precomposed.png` - файл с наложением эффектов тени, блика и т.д..
* `apple-touch-icon.png`


## Android

```html
<link rel="manifest" href="webmanifest.json">
```

```json
{
    "name": "Rick and Morty",
    "short_name": "Rick",
    "icons": [
        {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
        },
        {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
        }
    ],
    "theme_color": "#b3adad",
    "background_color": "#b3adad",
    "display": "standalone"
}
```

## Links
* [Favicon Generator](https://realfavicongenerator.net/) 