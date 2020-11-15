# Library

Препроцессор: Babel, TypeScript, CoffeeScript, LiveScript

Библиотеки: JQuery

Фреймворки: React.js, AngularJS, Vue.js

## События

```js
click, oninput, onchange, select, contextmenu

// События мыши
mouseenter, mouseover, mousemove, mousedown, mouseup, dblclick, wheel, mouseleave, mouseout

// Клавиатурные события
keydown, keypress, keyup

// События фокуса. Элемент получил/потерял фокус
focus, blur

// События формы
reset, submit

// Сетевые события. Браузер получил/потерял доступ к сети
online, offline


window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    //...
  }
});
```


## Работа с адресной строкой

```js
document.location.href     //  http://realadmin.ru/saytostroy/?page=4#top
document.location.protocol //  http:
document.location.host     //  realadmin.ru
document.location.pathname //  /saytostroy/
document.location.search   //  ?page=4
document.location.hash     //  #top
```

## Получаем Get параметры
```js
let
    regexp = /limit=([^&]+)/i,
    GetValue = '';

if (!!regexp.exec(document.location.search)) {
    GetValue = regexp.exec(document.location.search)[1];
}
```

## Прервать действие по умолчанию

```js
element.addEventListener("click", function (evt) { evt.preventDefault(); });
```

## LocalStorage

```js
LocalStorage.getItem();     // Получает запись из хранилища
LocalStorage.setItem();     // Создаёт новую запись в хранилище
LocalStorage.removeItem();  // Удаляет запись из хранилища
LocalStorage.clear();       // Полностью очищает хранилище
```

## Отлов ошибок

```js
isStorageSupport = true;
try {  
    LocalStorage.setItem();
} catch (err) {
    isStorageSupport = false;
}
```

## Links
* []()