# Grid
- `float` и `clear` игнорируются элементами сетки (но не самим контейнером-сеткой).
- `vertical-align` не влияет на элементы сетки.
- Псевдоэлементы `::first-line` и `::first-letter` не применяются к контейнеру-сетке
и его потомкам.
- Если контейнер-сетка является контейнером уровня строки `display: inline-grid`
и для него заданы обтекание или абсолютное позиционирование, то вычисляемое значение
свойства `display` будет `grid`.

```css
    .grid-container {
        display: inline-grid;
        display: grid;
        
        grid-template-areas: "post-1 post-1 post-2"  
                           "post-1 post-1 post-3"  
                           "post-6 post-5 post-4";
        
        grid-template-rows: fit-content(300px) 1fr 1fr; /* Количество строк */
        grid-template-columns: repeat(3, 200px);        /* Количество столбцов */
        
        grid-gap: 10px;           /* row-gap/column-gap - Определяющего промежуток между сеткой */
        grid-auto-rows: 200px;    /* Ширина неявной дорожки сетки */
        grid-auto-columns: 200px; /* Высота неявной дорожки сетки */
        grid-auto-flow: dense;    /* Автоматическое размещение. Элементы сетки, которые не размещены явно, автоматически помещаются в незанятое пространство в контейнере-сетке с помощью алгоритма автоматического размещения. [row, column, dense] */
    }
    
    .post-1 {
        grid-area: post-1;
        grid-column: 1/3; 
        grid-row: span 2; /* Ключевое слово span и целое положительное число/имя линии задают диапазон ячеек для размещения элемента сетки. */
    }
    .post-2 { grid-area: post-2; }
    /* … */
    .post-6 { grid-area: post-6; }

    /* Краткая запись сетки */
    .grid-container {
        grid: none;
        
        /* grid-template */
        grid: "a" 100px "b" 1fr;
        grid: [linename1] "a" 100px [linename2];
        grid: "a" 200px "b" min-content;
        grid: "a" minmax(100px, max-content) "b" 20%;
        grid: 100px / 200px;
        grid: minmax(400px, min-content) / repeat(auto-fill, 50px);
        
        /* grid-template-rows / [auto-flow && dense? ] grid-auto-columns? */
        grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
        
        /* [ auto-flow && dense? ] grid-auto-rows? / grid-template-columns */
        grid: auto-flow dense 40% / [line1] minmax(20em, max-content);
    }
```


Значение `auto` ориентируется на содержимое элементов сетки одной дорожки.
Как минимум, рассматривается как минимальный размер элемента сетки,
как определено min-width или min-height. Как максимум, обрабатывается так же,
как и max-content. **Может растягиваться за счет свойств `align-content` и `justify-content`**.

`fit-content` (длина или %) - представляющее собой формулу `min(maximum size,
max(minimum size, argument))`, которая вычисляется как minmax(auto, max-content),
то есть auto. При этом, размер дорожки ограничивается значением, указанным в скобках,
и если оно больше, чем автоматический минимум.

## Выравнивание по оси строки
Элементы сетки могут быть выровнены в направлении оси строки
(по горизонтали для LTR-языков) с помощью свойства `justify-self`
или свойства `justify-items` (заданного для контейнера-сетки).

## Выравнивание по оси столбца.
Элементы сетки могут выровнены в направлении, перпендикулярном оси строки
с помощью свойства `align-self` или свойства `align-item`, заданного для контейнера-сетки.

## Функция minmax
Определяет диапазон размеров, больше или равный min и меньше или равный max.
Если max < min, то max игнорируется, а `minmax(min, max)` обрабатывается как min.
Значения в fr можно устанавливать только как максимальное.

## Функция repeat
- Нотация repeat() не может быть вложенной.
- Значения `auto-fill` или `auto-fit` не могут быть совмещены с `min-content`, `max-content`,
`auto`, `fit-content()` или `fr`.
- Используя значение `auto-fill`, вы всегда получите хотя бы один столбец,
даже если он по какой-то причине не помещается в контейнер-сетку.
- Если вы используете `auto-fit`, то дорожки, которые не содержат элементы сетки,
будут сброшены.

## Links
- [HTML5Book](https://html5book.ru/css-grid/)
- [Grid layoutit](https://grid.layoutit.com/)

Доп. возможности
display: contents