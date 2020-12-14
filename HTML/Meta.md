# META Tags
Meta elements are tags used in HTML and XHTML documents to provide structured metadata about a Web page

Insert the necessary `<meta>` tag inside the `<head>` element.

* [General](#General)
    * [Viewport](#Viewport)
    * [Preload](#Preload)
    * [Info](#Info)
* [Robots](#Robots)
* [Open Graph](#Open Graph)
* [hCard](#hCard)
* [JSON-LD](#JSON-LD)
    * [Logo](#Logo)
    * [Breadcrumb](#Breadcrumb)
    * [Other](#Other)
* [Mobile](#Mobile)
* [Custom](#Custom)


## General
Alternative form of setting the charset attribute. A document must not contain both a meta element with an http-equiv attribute in the encoding declaration state and a meta element with the charset attribute present
```html
<meta content="charset=UTF-8" />
```

Defines a time interval in seconds for the document to refresh itself
```html
<meta http-equiv="refresh" content="300" />
```

Set the name of the default CSS style sheet
```html
<meta http-equiv="default-style" content="default stylesheet title" />
```

Name of the author of the document
```html
<meta name="author" content="John Doe" />
<meta name="designer" content="John Doe" />
```

Used for verifying ownership of a site
```html
<meta name="verify" content="" />
```

The name of the Web application that the page represents
```html
<meta name="application-name" content="Sample Application Name" />
```

Specifies the software package used to generate the document
```html
<meta name="generator" content="SomeWebPageGenerator 4.0" />
```

Specify a legacy document mode that Internet Explorer should use to display a webpage (For support IE8-IE9)
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

### Viewport
Changes the logical window size used when displaying a page mobile browsers
```html
<meta
    name="viewport"
    content="
        width=device-width,
        user-scalable=no,
        shrink-to-fit=no
        initial-scale=1,
        maximum-scale=1.0,
        minimum-scale=0.86
"/>
```
> Usage of `user-scalable=no` can cause accessibility issues to users with visual impairments such as low vision.

width >= `200`  <= `10000` or `device-width`

height >= `233` <= `10000` or `device-height`

scale >= `0.1` <= `1.0`

Default width values:
* Mobile Safari  = 980px,
* Android WebKit = 800px,
* Opera = 850px,
* IE    = 974px.

Recommended:
```html
<meta name='viewport' content='width=device-width,initial-scale=1'/>
<meta name='apple-mobile-web-app-capable' content='yes'/>
<meta name='HandheldFriendly' content='true'/>
<meta name='MobileOptimized' content='width'/>
```
Get more [information](https://developer.mozilla.org/ru/docs/Словарь/Viewport).

### Preload
`async` - для всех внешних скиптов, которым не нужно знать о HTML (google analytics, tracking scripts). Загружается вместе с html, после своей загрузки приостанавливает загрузку html, выполняется. Затем возобновляется загрузка html.

`defer` - для внешних скриптов, которые не очень важны Загружается вместе с html, ждет пока html загрузится до конца. Потом выполняется.

```html
<link rel="stylesheet" type="text/css" href="*.css"/>

<script async type='text/javascript' src='*.js'></script>
<script defer type='text/javascript' src='*.js'></script> <!-- before DOMContentLoaded -->
```

Ускоряем получение доступа к ресурсам:
```html
<meta http-equiv='x-dns-prefetch-control' content='on'>
<link rel="dns-prefetch" href="//google-analytics.com/">
```

```html
<link rel="prefetch"    href="app.js"> <!-- Низкий приоритет -->
<link rel="subresource" href="app.js"> <!-- Высокий приоритет -->

<link rel="prerender" href="samples.html">
```

Sample:
```html
<link rel="preload" href="sprite.svg" as="font" type="image/svg+xml">

<link rel="preload" href="regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />

<link rel="preload" href="bg-image-narrow.png" as="image" media="(max-width: 600px)">
<link rel="preload" href="bg-image-wide.png"   as="image" media="(min-width: 601px)">
```

Get more [information](https://developer.mozilla.org/ru/docs/Web/HTML/Preloading_content).

### Info

```html
<meta name="description" content="Большинство поисковиков видят лишь 320 символов."/>
<meta name="keywords" content="мир, война, любовь"/>
```

## Robots

```html
<meta name="robots" content="index, follow" />
<meta name="robots" content="noindex, nofollow" />

<meta name="http-equiv" content="X-Robots-Tag : noindex, follow" />

<meta name="googlebot" content="..., ..." />
```
Google: [special tags](https://support.google.com/webmasters/answer/79812?hl=ru),
[data-nosnippet](https://developers.google.com/search/reference/robots_meta_tag?hl=ru),
[robots.txt](https://developers.google.com/search/reference/robots_txt?hl=ru),

## Open Graph
```html
<meta property="og:title" content=""/>
<meta property="og:description" content=""/>
<meta property="og:site_name" content=""/>
<meta property="og:locale" content="ru_RU"/>
<meta property="og:type" content="profile"/>
<meta property="og:url" content= "https://..."/>

<meta property="og:image" content="share.jpg"/>
<meta property="og:image:type" content="image/jpeg"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="800"/>
```
Learn more about [OpenGraph Meta Tags](https://opengraphprotocol.org/).

```html
<meta name="twitter:title" content=""/>
<meta name="twitter:card"  content="summary_large_image"/>
<meta name="twitter:image" content="share.jpg"/>
<meta name="twitter:description" content=""/>
```
Learn more about [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards).

```html
<meta name="vk:image" content="share.jpg">
```
One page - one subject.
[Specification](https://ogp.me/).
Yandex about [open-graph](https://yandex.ru/support/webmaster/open-graph/intro-open-graph.html "rus")


## hCard
```html
<div class="vcard">
 <div>
   <span class="category">Кафе</span>
   <span class="fn org">Ромашка</span>
 </div>
 <div class="adr">
   <span class="locality">г. Солнечный</span>,
   <span class="street-address">просп. Романтиков, д. 21</span>
 </div>
 <div>Телефон: <span class="tel">+7 (890) 123-45-67</span></div>
 <div>Мы работаем <span class="workhours">ежедневно с 11:00 до 24:00</span>
   <span class="url">
     <span class="value-title" title="http://www.romashka-cafe.ru"> </span>
   </span>
 </div>
</div>
```
Get more [information](http://microformats.org/wiki/hcard)

## JSON-LD
Insert JSON-LD inside the `<head>` element.
```html
    <script type="application/ld+json">
        [{}, {}]
    </script>
```

### Logo
```json
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "http://www.example.com",
    "logo": "http://www.example.com/images/logo.png"
}    
```

### Breadcrumb
```json
{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Books",
        "item": "https://example.com/books"
    },{
        "@type": "ListItem",
        "position": 2,
        "name": "Science Fiction",
        "item": "https://example.com/books/sciencefiction"
    },{
        "@type": "ListItem",
        "position": 3,
        "name": "Award Winners"
    }]
}   
```
Check extended output [results](https://search.google.com/test/rich-results?utm_campaign=goodvar&utm_medium=microdata&utm_source=breadcrumb).

### Other
JSON-LD data:
* [App](https://developers.google.com/search/docs/data-types/software-app?hl=ru)
* [Logo](https://developers.google.com/search/docs/data-types/logo?hl=ru)
* [Article](https://developers.google.com/search/docs/data-types/article?hl=ru)
* [Event](https://developers.google.com/search/docs/data-types/event?hl=ru)
* [Product](https://developers.google.com/search/docs/data-types/product?hl=ru)

## Mobile
Enable users to add your web application or webpage link to the Home screen. Replace icon.png with your icon file path
```html
<link rel="apple-touch-icon" href="icon.png" />
```

Specify a launch screen image that is displayed while your web application launches. Replace app.png with your image file path
```html
<link rel="apple-touch-startup-image" href="app.png" />
```

Mobile Internet Explorer allows us to activate ClearType technology for smoothing fonts for easy reading
```html
<meta http-equiv="cleartype" content="on" />
```

Specify whether or not telephone numbers in the HTML content should appear as hypertext links
```html
<meta name="format-detection" content="telephone=no" />
```

## Custom
Use custom meta tags to store data that you need in javascript, instead of hard-coding that data into your javascript
```html
<meta name="google-analytics" content="UA-XXXXXXXXX-X" />
<meta name="variable" content="value" />
```