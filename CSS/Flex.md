# Flex
- Всегда явно задавать размер колонок: `width` или `flex-basis`.
- Расстояние между колонок задавать с помощью `magrin` (если разные отступы)
или `justify-content` (если одинаковые отступы)

```css
.flex-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    
    -ms-flex-wrap: wrap;
        flex-wrap: wrap; 
    /*
        nowrap       - только на одной линии - по умолчанию
        wrap         - разрешить перенос flex-элементов на новые линии
        wrap-reverse - осуществлять перенос flex-элементов в обратном порядке
    */
    
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
       -ms-flex-direction: row;
           flex-direction: row;
    /*
        row             →
        column          ↓
        row-reverse     ←
        column-reverse  ↑
    */
    
    -webkit-box-pack: start;
       -ms-flex-pack: start;
     justify-content: flex-start;
    /*
        flex-end      - прижать к правому краю
        center        - по центру
        space-between - равномерно распределить между элементами
        space-around  - равномерно распределить относительно центра
    */
    
    -webkit-box-align: stretch;
       -ms-flex-align: stretch;
          align-items: stretch;
    /*
        lex-start
        flex-end
        center
        baseline
    */
}
```

- `flex-grow` - поглощение лишнего пространства (default: `0`)
- `flex-shrink` - поглощение отрицательного пространства (default: `1`)
- `order` - положение (default: `0`)


## Links
- Вадим Макеев. [Flexbox, теперь понятно](https://pepelsbey.net/pres/flexbox-gotcha/).
- Руководство от MDN. [Using CSS flexible boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).
- Сборник типовых примеров. [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/).
- Flexbox-песочница [flexyboxes](https://the-echoplex.net/flexyboxes/).
- Smashing Magazine. [Harnessing Flexbox For Today’s Web Apps](https://www.smashingmagazine.com/2015/03/harnessing-flexbox-for-todays-web-apps/).
- Сборник багов [Flexbugs](https://github.com/philipwalton/flexbugs) (особенно актуально для IE10).
