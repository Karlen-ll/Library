# Aria

Необходимо не допускать пустых ссылок. Необходимо добавить заголовок или описание.
```html
<a aria-label="Facebook">
  <svg> … </svg>
</a>
```

Краткое описание раздела в `aria-label`, либо прячем заголовок:
```html
<section aria-label=" … ">
  <h2 class="visually-hidden"> … </h2>
</section>
```

Не интерактивные элементы:
```html  
<button aria-hidden="true" style="display: none;"> … </button>  
```

Чтобы повысить совместимость с клиентскими приложениями которые не поддерживают
ARIA атрибуты, можно использовать  `aria-labelledby`  вместе с элементом <label>
(используя атрибут for)

### Links

Aria:
* [w3.org](https://www.w3.org/TR/wai-aria/)
* [developer.mozilla.org](https://developer.mozilla.org/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques)
