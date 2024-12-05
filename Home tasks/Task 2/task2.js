import ingridients from "../../data/ingridients.js";

// Задание 2

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


// // Решение с помощью map() и append()

//  //1 Находим элемент ul#ingredients в документе
// const ingredientsList = document.getElementById('ingredients');
// console.log(ingredientsList);

// // 2  Создаем массив элементов <li>
// const listItems = ingridients.map(ingridient => {
// const createLi = document.createElement('li');   // Создаем элемент <li>

// createLi.textContent = ingridient;               // Добавляем текстовое содержимое
// createLi.classList.add('product__item');         // Добавляем класс 'item'

// return createLi;                                 // Возвращаем созданный элемент
// } )

// // Вставляем все элементы <li> в ul#ingredients за одну операцию

// ingredientsList.append(...listItems);

// // Мы используем метод append для вставки всех элементов из массива 
// // listItems в элемент <ul>. Оператор ... (spread operator) позволяет 
// // передать каждый элемент массива в качестве отдельного аргумента функции append.




// Решение с помощью forEach и appendChild()

//1 Находим элемент ul#ingredients в документе
const ingredientsList = document.getElementById('ingredients');
console.log(ingredientsList);

// 2  Создаем массив элементов <li>
ingridients.forEach(ingridient => {
const createLi = document.createElement('li');   // Создаем элемент <li>
createLi.textContent = ingridient;               // Добавляем текстовое содержимое
createLi.classList.add('product__item');         // Добавляем класс 'item'
ingredientsList.appendChild(createLi);   
} )
//console.log(listItems);
// Вставляем все элементы <li> в ul#ingredients за одну операцию

// Мы используем метод append для вставки всех элементов из массива 
// listItems в элемент <ul>. Оператор ... (spread operator) позволяет 
// передать каждый элемент массива в качестве отдельного аргумента функции append.