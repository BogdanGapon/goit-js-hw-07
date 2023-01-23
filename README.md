# goit-js-hw-07

1. Использование data атрибутов
   При использовании data атрибутов в html теге, мы можем с помощью JS обратиться к данному атрибуту используя свойство `dataset`. При этом мы как бы разделяем название атрибута на 2 свойства в JS первое - `dataset`, второе - `nameOfDataSetAtribute`;
   Пример

   ```html
   <img class="img" data-source="${img.original}" alt="${img.description}" />
   ```

```js
$ELEMENT.addEventListener("click", onCreateImgOnListItem);

function onCreateImgOnListItem(evt) {
  console.log(evt.target.dataset.source);
}
```
