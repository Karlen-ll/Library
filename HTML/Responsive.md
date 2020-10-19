# Responsive elements

```html
<img width=”100” srcset=”
    a.png 300w,
    b.png 600w,
    c.png 900w
”/>

<img width=”100” src=”a.png” srcset=”
    b.png 2x,
    c.png 3x
”/>

<img src=”a.png” srcset=”
    a.png 300w,
    b.png 600w,
    c.png 900w”

    sizes=”(min-width: 600px)” 50vw : 100vw
”/>
```

```html
<picture>
   <source media=”(min-width:960px)” srcset=”a1.png 1x, a2.png 2x”>
   <source media=”(min-width:640px)” srcset=”b.png”>
   <img src=”c.png” />
</picture>
```

```html
<picture>
   <source type=”image/webp” srcset=”pic.webp”>
   <source type=”image/vnd.ms-photo” srcset=”pic.jpxr”>
   <img src=”pic.jpg” />
</picture>
```