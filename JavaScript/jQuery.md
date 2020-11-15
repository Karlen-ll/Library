# jQuery

Если CDN ссылка не загрузилась, загружаем с сайта.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

<script>
  window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
</script>
```


## Получить размер элемента

`jQuery.width()` и `jQuery.height()` округляет значения.
Если нужен размер «как есть», то используйте нативный метод `getBoundingClientRect`.

```js
$(".element")[0].getBoundingClientRect().width
$(".element")[0].getBoundingClientRect().height
// или
$(".element").get(0).getBoundingClientRect().width
$(".element").get(0).getBoundingClientRect().height
```


## Links
* [jQuery](https://jquery.com/)
* You might [not need jQuery](http://youmightnotneedjquery.com/)