# HTML

* [Tags](#Tags)
    * [Text](#Text)
    * [Table](#Table)
    * [Content](#Content)
    * [Blocks](#Blocks)
    * [List](#List)
    * [Link](#Link)
    * [Event](#Event)
* [Preprocessors](#Preprocessors)
* [Template Engineers](#Template Engineers)
* [Links](#Links)

```html
<!DOCTYPE html>
<html lang="ru-RU">
    <head>
        <meta charset="UTF-8">
        <title> … </title>
    </head>
    <body>
        <main>
            <h1> … </h1>
            <nav> … </nav>
        </main>
        <section> … </section>
        <article> Новости, статьи, записи… </article>
        <aside> Боковая панель: рубрики,ссылки… </aside>
    </body>
</html>
```


## Tags


### Text

`<wbr>` - возможное место разрыва длинной строки *(none)*

`<blockquote></blockquote>` - большая цитата *(block)*

`<cite></cite>` - источник цитирования *(inline)*

`<q></q>` - краткая цитата *(inline)*

`<code></code>` - фрагмент программного кода *(inline)*

`<kbd></kbd>` - текст, вводимый пользователем с клавиатуры *(inline)*

`<pre></pre>` - выводит текст со всеми пробелами и переносами *(block)*

`<samp></samp>` - результат выполнения сценария *(inline)*

`<var></var>` - выделяет переменные из программ, обычно выделяется курсивом *(inline)*

`<del></del>` - перечеркивает текст, помечая как удаленный *(inline)*

`<s></s>` - перечеркивает неактуальный текст *(inline)*

`<dfn></dfn>` - выделяет термин курсивом *(inline)*

`<em></em>` - выделяет важные фрагменты текста курсивом *(inline)*

`<i></i>` - выделяет текст курсивом без акцента *(inline)*

`<strong></strong>` - выделяет полужирным важный текст *(inline)*

`<b></b>` - задает полужирное начертание отрывка текста, без дополнительного акцента *(inline)*

`<ins></ins>` - подчёркивает изменения в тексте *(inline)*

`<u></u>` - выделяет отрывок текста подчёркиванием, без дополнительного акцента *(inline)*

`<mark></mark>` - выделяет фрагменты текста желтым фоном *(inline)*

`<small></small>` - отображает текст шрифтом меньшего размера *(inline)*

`<sub></sub>` - отображает текст в виде нижнего индекса *(inline)*

`<sup></sup>` - отображает текст в виде верхнего индекса *(inline)*

`<time></time>` - дата / время документа или статьи *(inline)*

`<abbr></abbr>` - аббревиатура или акроним *(none)*

`<address></address>` - контактные данные автора документа или статьи *(block)*

`<ruby></ruby>` - контейнер для Восточно-Азиатских символов и их расшифровки *(inline)*

`<rp></rp>` - тег для скобок вокруг символов *(none)*

`<rt></rt>` - расшифровка символов *(block)*


### Table

`<table></table>` - html-таблица *(table)*

`<tr></tr>` - строка таблицы *(table-row)*

`<th></th>` - заголовок столбца таблицы *(table-cell)*

`<td></td>` - ячейка таблицы *(table-cell)*

`<thead></thead>` - блок заголовков таблицы *(table-header-group)*

`<tbody></tbody>` - тело таблицы *(table-row-group)*

`<tfoot></tfoot>` - нижний колонтитул таблицы *(table-footer-group)*

`<caption></caption>` - подпись к таблице *(table-caption)*

`<col>` - выбирает для форматирования столбцы *(table-column)*

`<colgroup></colgroup>` - контейнер для одного или нескольких `<col>` *(table-column-group)*


### Content

`<audio></audio>` - добавляет аудио-файлы *(inline-block)*

`<video></video>` - добавляет видео-файлы *(inline-block)*

`<source>` - указывает местоположение и тип альтернативных файлов *(none)*

`<track>` - субтитры для элементов `<audio>` и `<video>` *(none)*

`<embed>` - встраивает внешний интерактивный контент или плагин *(inline-block)*

`<object></object>` - контейнер для встраивания мультимедиа *(inline-block)*

`<param>` - задаёт параметры для плагинов, встраиваемых с помощью элемента <object> *(none)*


### Blocks

`<main></main>` - контейнер для уникального основного контента *(block)*

`<header></header>` - заголовок сайта или секции *(block)*

`<footer></footer>` - секция для нижнего колонтитула документа или раздела *(block)*

`<nav></nav>` - раздел документа, содержащий навигационные ссылки по сайту *(block)*

`<section></section>` - логическая область (раздел) страницы, обычно с заголовком *(block)*

`<article></article>` - раздел с независимым контентом *(block)*

`<aside></aside>` - косвенный контент страницы *(block)*

`<div></div>` - контейнер для разделов html-документа, группирует блочные элементы *(block)*

`<span></span>` - контейнер для строчных элементов *(inline)*

___

`<figure></figure>` - контейнер для изображений, диаграмм и т.п. *(block)*

`<figcaption></figcaption>` - заголовок для элемента `<figure>` *(block)*

___

`<details></details>` - контейнер с дополнительными сведениями *(block)*

`<summary></summary>` - видимый заголовок для элемента `<details>` *(block)*


### List

`<ol></ol>` - упорядоченный нумерованный список *(block)*

`<ul></ul>` - маркированный список *(block)*

`<li></li>` - элемент списка (list-item)

`<dl></dl>` - контейнер для термина и его описания *(block)*

`<dt></dt>` - задаёт термин *(block)*

`<dd></dd>` - расшифровывает термин *(block)*


### Link

`<a></a>` - гиперссылка *(inline)*

`<img>` - подключение файла изображения относящегося к контенту *(inline)*

`<map></map>` - активные области на карте-изображении *(inline)*

`<area>` - гиперссылка с текстом или активная область внутри карты-изображения *(inline)*

`<canvas></canvas>` - холст-контейнер *(inline-block)*


### Event

`onblur` - Потеря фокуса.

`onchange` - Изменение значения элемента формы.

`onclick` - Щелчок левой кнопкой мыши на элементе.

`ondblclick` - Двойной щелчок левой кнопкой мыши на элементе.

`onfocus` - Получение фокуса.

`onkeydown` - Клавиша нажата, но не отпущена.

`onkeypress` - Клавиша нажата и отпущена.

`onkeyup` - Клавиша отпущена.

`onload` - Документ загружен.

`onmousedown` - Нажата левая кнопка мыши.

`onmousemove` - Перемещение курсора мыши.

`onmouseout` - Курсор покидает элемент.

`onmouseover` - Курсор наводится на элемент.

`onmouseup` - Левая кнопка мыши отпущена.

`onreset` - Форма очищена.

`onselect` - Выделен текст в поле формы.

`onsubmit` - Форма отправлена.

`onunload` - Закрытие окна.


## Preprocessors:

* Pug(Jade)
* MarkDown
* Haml
* Slim

## Template Engineers:

* Handlebars
* Mustache


### Links
- [Validator](http://validator.w3.org/)

* [TutorialRepublic](https://www.tutorialrepublic.com/html-tutorial/)
* [HTML5 tags](https://html5please.com/)
* [Qhmit. HTML5 tags](https://www.qhmit.com/html_5/tags/)

- [HTML Book](http://htmlbook.ru)
- [HTML5 canvas tutorials](https://www.html5canvastutorials.com/)
