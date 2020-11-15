# Scalable Vector Graphics
SVG это язык XML разметки, схожий с XHTML, который может использоваться для рисования векторной графики.

* [Use](#Use)
    * [Object](#Object)
    * [Image or background](#Image-or-background)
    * [Inline](#Inline)
* [Links](#Links)

## Use

|             | Image | Background | Object | Inline |
|-------------|-------|------------|--------|--------|
| CSS         |   -   |     -      |   -*   |   +    |
| JS          |   -   |     -      |   +    |   +    |
| Animations  |   +   |     +      |   +    |   +    |
| Interactive |   -   |     -      |   +    |   +    | 

*Стили должны быть прописаны или в самом SVG файле, или подключены внешним стилем в SVG в начале файла:

```svg
    <?xml-stylesheet type="text/css" href="svgstyle.css"?>
```  


### Object

Плюсы:
- можно использовать внешний CSS файл для управления стилями;
- поддерживаются SVG анимации и фильтры;
- поддерживаются интерактивные анимации;

Минусы:
- для IE 8 и ниже необходима замена на растровое изображение.

```html
    <object type="image/svg+xml" data="icon.svg"></object>
``` 


### Image or background

Плюсы:
- поддерживаются SVG анимации и фильтры;
- в случае с background-image можно использовать SVG спрайты;

Минусы:
- нельзя менять свойства элементов SVG через CSS или JS;
- не поддерживаются интерактивные анимации;
- для IE 8 и ниже необходима замена на растровое изображение.

```html
    <img src="icon.svg">
``` 

```css
    .icon {
        width:  10px;
    	height: 10px;
    	background-image: url("icon.svg");
    }
```     


### Inline

Плюсы:
- никакой подгрузки внешних файлов;
- доступны манипуляции с элементами SVG через CSS и JS;
- поддерживаются SVG анимации и фильтры;
- поддерживаются интерактивные анимации;
- возможность повторного использования элементов;

Минусы:
- загрязняется код страницы;
- для IE 8 и ниже необходима дополнительная разметка, и замена на растровое изображение.

```html
    <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="10" x2="10" y2="10" stroke="#bfa069" />
    </svg>
``` 
    
    
## Links
- [Sara Soueidan about SVG](https://www.sarasoueidan.com/tags/svg/)

* About [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)
* [Tutorial](https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial)

- [SVG element reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)
- [SVG Attribute reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)