# ECMAScript

## Циклы

```js
// for…in предназначен для итерации числовых ключей объекта
let obj = { a: 1, b: 2, c: 3 } 
for (let val in obj) {
  //..
}

// for…of предназначен для итерации итерируемых объектов
let list = ['a', 'b', 'c']
for (let val of list) {
    //..
}
```

## Удаляем дубликаты из массива

```js
// ES5
var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos
  })
}

// ES6
var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos)
}
// или
const uniqEs6 = (array) => [ ...new Set(array) ]
```


## Links
* []()