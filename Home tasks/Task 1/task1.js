// Задание 1
// В HTML есть список категорий ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


//Решение

// Для выполнения этой задачи в JavaScript, можно воспользоваться следующими шагами:

// 1. Найти элемент с id "categories".
// 2. Получить все элементы с классом "item" внутри этого элемента.
// 3. Посчитать количество этих элементов и вывести в консоль.
// 4. Для каждого элемента "item" получить текст заголовка (элемент <h2>) и количество вложенных элементов <li>.
// 5. Вывести эту информацию в консоль.

// 1. Найти элемент с id "categories".

const catigories = document.querySelector('#categories');
console.log(catigories);

// 2. Получить все элементы с классом "item" внутри этого элемента.

const allItems = catigories.querySelectorAll('.item');
console.log(allItems);

// 3. Посчитать количество этих элементов "item" и вывести в консоль.

console.log(`Number of categories: ${allItems.length}`);

// 4. Для каждого элемента "item" получить текст заголовка (элемент <h2>) и количество вложенных элементов <li>.

// Для каждого элемента li.item
allItems.forEach(item => {
// Находим заголовок (тег <h2>) и получаем его текстовое содержимое
 const categoryTitle = item.querySelector('h2').textContent;
 
// Находим все элементы <li> внутри текущей категории и считаем их количество
const categoryItemsCount = item.querySelectorAll('ul li').length;
// Выводим текст заголовка и количество элементов в категории
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryItemsCount}`);
})
