# CSS

**Препроцессор**: Sass(SCSS), Less, PostCSS, Stylus

**Библиотеки**: Bootstrap

**Методологии**: БЭМ(BEM), SMACSS, RSCSS, OOCSS.

**Подходы**:
- `Отзывчивая верстка` начинается с верстки десктопной версии сайта. Затем она адаптируется для меньших экранов.

- `Mobile-first` начинается с верстки версии сайта для мобильных устройств.
  
- `Критичный CSS` - это минимальный набор блокирующего CSS, требуемого для рендеринга первого экрана с контентом пользователю.
`FOUC (Flash Of Unstyled Content)` - это появление неоформленного контента при загрузке.
  
---

* [Block-inline elements](#Block-inline-elements)
    * [block](#block)
    * [inline-block](#inline-block)
    * [inline](#inline)
* [Selectors](#Selectors)
* [Specificity](#Specificity)
* [Pseudo-classes](#Pseudo-classes)
* [Styling text](#Styling-text)
* [Transform](#Transform)
* [Animation](#Animation)
* [Background](#Background)
* [SVG](#SVG)
* [Links](#Links)

---

## Block-inline elements

### block

- Начинается с новой строки родительского элемента и занимает всю строку.
- Можно задавать ширину и высоту.
- Можно выровнять с помощью vertical-aligh.
- Margins и paddings работают со всех сторон.

### inline-block

- Размер зависит от контента.
- Можно адавать ширину и высоту.
- Можно выровнять с помощью vertical-aligh.
- Margins и paddings работают со всех сторон.

### inline

- Размер зависит о контента.
- Ширину ивысоту задавать нельзя.
- Можно выровнять только по горизонтали. Место, которое занимает элемент по вертикали зависит от line-height.
- Ведет себя как блочный элемент, если задать вертикальные margins и paddings.


## Selectors

```css
p + a {}        /* Стилизируем соседние теги <a> идущие после <p> */ 
p ~ a {}        /*  Стилизируем сестринские (саблинговые) теги <a> */ 

p a {}          /*  Стилизируем все дочерние теги <a> */ 
p > a {}        /*  Стилизируем непосредственные дочерние теги <a> */ 

a[href="#"] {}  /* Стилизируем теги с заданным атрибутом */


a[href^="http"] {}  /* Карат "^" - символ начала строки */
a[href$=".jpg"] {}  /* Доллар "$" - символ конца строки */

a[href*="home"] {}  /* Звездочка "*" - символ выбора подстроки */
a[href~="home"] {}  /* Тильда "~" - символ выбора слова. Обрамлен разделителями:
                       пробелами или символами начала/конца строки
                    */

a[href|="bar"] {}   /* Вертикальная линия "|" - символ 100% совпадения либо начинается
                       с заданной строки bar- (наличие знака переноса обязательно)
                    */
```

```css
a[class^="icon--"] {}  /* Class начинающиеся с префикса icon-- */
```


## Pseudo-classes
Псевдоэлемент - это ключевое слово, добавляемое к селектору, которое позводяет стилизовать определенную часть выбранного элемента.

```css
li:nth-child(even) {} /*  Четный элемент */
li:nth-child(odd) {}  /*  Нечетный элемент */
li:nth-child(3) {}    /*  Элемент с индексом 3 */
                     
p:nth-child(3n+1) {}  /*  Элемент согласно выражению (3*N +1 = 1) */
p:nth-last-child {}
                     
p:nth-of-type {}      /*  Элементы данного типа */
p:nth-last-of-type {}
                     
p:first-of-type {}    /*  Первый элемент данного типа */
p:last-of-type {}     /*  Последний элемент данного типа */
                     
p:only-child {}       /*  Единственный дочерний элемент */
p:only-of-type {}     /*  Единственный дочерний элементом данного типа */
                     
p:empty {}            /*  Элемент, который не содержит ни одного дочернего элемента */

```

```css
input:read-only {}    /*  Поля доступные только для чтения */
input:read-write {}   /*  Поля доступные для редактирования */
                      /*  К сожалению, не все браузеры поддерживают данные селекторы.
                          Но их можно заменить на другие: input[read-only]
                          или input[read-write]
                      */
                     
input:enabled {}      /*  Не заблокированные поля */
input:disabled {}     /*  Заблокированные поля */
input:required {}     /*  Обязательные поля */
                     
input:checked {}      /*  Отмеченные checkbox */
                     
input:invalid {}      /*  Не удовлетворяющие требованиям поля */
input:valid {}        /*  Удовлетворяющие требованиям поля */
                     
input:in-range {}     /*  Входящие в диапазон значения <input type=”number”>*/
input:out-of-range {} /*  Не входящие в диапазон значения полей */
                     
select:optional {}    /*  Не обязательные поля */

```

```css
body:not(strong) /* Псевдокласс отрицания */ 
```

```css
body:lang(ru) {} /* <html lang=ru> */
```


## Specificity
Специфичность CSS-селекторов:

|                              |      |
|------------------------------|------|
| Тег и псевдоэлемент          | 0001 |
| Класс, псевдокласс, аттрибут | 0010 |
| ID                           | 0100 |
| Инлайновый стиль             | 1000 |


## Styling text

```css
.sample {
    text-indent: 50px; /* Отступ.
    <значение> | <проценты> | inherit */
    
    text-decoration: none; /* Декорирование.
    [ blink || line-through || overline || underline ] | none | inherit */
    
    text-transform: capitalize; /* Определение регистра.
    capitalize | lowercase | uppercase | none | inherit */
}
```

```css
.sample {
    letter-spacing: normal; /* Определяет расстояние между символами.
    <значение> | normal | inherit */
    
    word-spacing: 30px; /* Расстояние между словами.
    <размер> | normal | inherit */
    
    white-space: pre-wrap; /* Определяет отображение пробелов.
    normal | nowrap | pre | pre-line | pre-wrap | inherit */

    /* Определяем способ переноса длинных слов. Вопрос с поддержкой... */
    word-break: normal; /* normal | break-all | keep-all */
    word-wrap: normal; /* normal | break-word | inherit */
}
```

```css
/* Запретить выделение текста.
user-select: none | auto | text | all | contain */

button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```


## Transform

```css
.sample {
    transform: translate(-50%, -50%); /* Смещение элемента */
    transform: translateX(0);
    transform: translateY(0);
    
    transform: rotate(360deg);  /* Поворот элемента на заданный угол */
    
    transform: scale(0, 0);     /* Масштаб элемента по горизонтали и вертикали */
    transform: scaleX(0);
    transform: scaleY(0);
    
    transform: skewX(0);        /* Наклон элемента */
    transform: skewY(0);
}
```

```css
.sample {
    transform: matrix(a, c, b, d, tx, ty); /* Матрица преобразований предназначена для вычисления новых координат элемента с целью его трансформации */
    
       -moz-transform: matrix(a, c, b, d, tx, ty);  /* Firefox 3.5+ */
    -webkit-transform: matrix(a, c, b, d, tx, ty);  /* Safari 3.1+ и Chrome 2.0+ */
         -o-transform: matrix(a, c, b, d, tx, ty);  /* Opera 10.5+ */
        -ms-transform: matrix(a, c, b, d, tx, ty);  /* IE 9.0 */
    
    /* IE 5.5+ */
    filter: progid:DXImageTransform.Microsoft.Matrix(M11=a, M12=b, M21=c, M22=d, Dx=tx, Dy=ty); 
}
```


## Animation

```css
@keyframes name {
    from { width: 100px; }
      to { width: 200px; }
}

.button {
    animation-name: name;                   /* Название анимаций через запятую */
    animation-duration: 1s;                 /* Длительность в секундах или миллисекундах */
    animation-iteration-count: infinite;    /* Количество проигрываний */
    animation-direction: reverse;           /* Анимация в обратном порядке. Если задать параметр   alternate - то нечетные проигрывания будут выполнятся в прямом направлении, а четные - в обратном. alternate-reverse - наоборот */
    animation-delay: 1s;                    /* Задержка анимации */

    animation-fill-mode: both;              /* Состояние до и после анимации */
    /* [forwards, backwards, both] */

    animation-play-state: paused;           /* Остановка и запуск анимации */
    /* [running, paused] */

    animation-timing-function: ease;        /* “Форма” анимации. */
    /*
        [ease, linear, ease-in, ease-out, ease-in-out]
        или cubic-bezier(x1, y1, x2, y2)
        steps(число_шагов, направление) направление может принять значение start или end
    */
}
```

## Background

```css
.sample {
    background: url('images/hand.png') repeat-y #fc0; /* Универсальное свойство */

    background-image: url('images/bg.jpg');           /* Путь к фоновому изображению */
    background-color: #c7b39b;                        /* Цвет фона */
    
    background-attachment: fixed;
    /*
        [fixed, scroll, local]
        Определяет будет ли фоновое изображение прокручиваться с содержимым элемента
    */

    background-clip: padding-box;
    /*
        [padding-box, border-box, content-box]
        Определяет, как цвет фона или фоновая картинка должна выводиться под границами.
        Эффект заметен при прозрачных или пунктирных границах.
    */
    
    background-origin: [padding-box | border-box | content-box];
    /*
        [padding-box, border-box, content-box]
        Определяет область позиционирования фонового рисунка.
        Это свойство не применяется, когда значение background-attachment задано как fixed.
    */

    background-position: 0, 0;
    /* Задает начальное положение фонового изображения */

    background-repeat: repeat, no-repeat;
    /*
        [repeat | space | round | no-repeat]
        Определяет, как будет повторяться фоновое изображение.
    */
    
    background-size: cover;
    /*
        [<значение>, <проценты>, auto ], cover, contain
        Масштабирует фоновое изображение
    */
}
```


## SVG

```css
svg {
    fill: none;                                 /*  цвет */
    fill-opacity: 0.5;
                                               
    stroke: red;                                /*  обводка */
    stroke-width: 5px;
    stroke-opacity: 0.5;
    stroke-linecap: butt;                       /*  butt | round | square */
    stroke-linejoin: miter;                     /*  тип сгиба: niter | round | bevel */
    
    stroke-dasharray: 5px 10px 15px 2px 7px;
    stroke-dashoffset: 25px;                    /*  сдвиг обводки */
}
```

## Links
* [CSS zen garden](www.csszengarden.com)

- [TutorialRepublic](https://www.tutorialrepublic.com/css-tutorial/)
- [Prefix](https://compat.spec.whatwg.org/)
- [AutoPrefixer](http://autoprefixer.github.io/ru/)
- Full list of [Pseudo-classes](https://developer.mozilla.org/ru/docs/Web/CSS/Псевдо-классы)
- Использование [переменных](https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties) в CSS

* [CSS Shorthand Generator](https://shrthnd.volume7.io/)
* [CSS Animations Generator](https://www.theappguruz.com/tag-tools/web/CSSAnimations/)
* [uiGradients](https://uigradients.com/)