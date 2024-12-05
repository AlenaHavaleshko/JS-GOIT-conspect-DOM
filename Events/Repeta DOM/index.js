// const navEl = document.querySelector('.site-nav');

// //const firstNavItem = navEl.firstElementChild;
// const parentNodeItem = navEl.parentNode;
// const childNodesItem = navEl.childNodes;
// const childrenItem = navEl.children;
// const firstChildItem = navEl.firstChild;
// const firstElementChild = navEl.firstElementChild;
// const lastChild = navEl.lastChild;
// const lastElementChild = navEl.lastElementChild;
// const previousSibling = navEl.previousSibling;
// const peviousElementSibling = navEl.previousElementSibling;
// const nextSibling = navEl.nextSibling;
// const nextElementSibling = navEl.nextElementSibling;

// //console.log(firstNavItem);      // выберет родителя navEl
// console.log(parentNodeItem);      // массив со всеми дочерними элементами + текстовие
// console.log(childNodesItem);
// console.log(childrenItem);
// console.log(firstChildItem);      // первый дочерний элемент внутри elem + текстовие узлы и пробели
// console.log(firstElementChild);   // первый дочерний узел элемент внутри elem. firstChild = firstElementChild, значит в вашей разметке отсутствуют пробелы, переносы строк или другие промежуточные узлы.
// console.log(lastChild);
// console.log(lastElementChild);
// console.log(previousSibling);      // попередній сусідній вузол,попередній сусід
// console.log(peviousElementSibling); // previousElementSibling завжди повертає попередній сусідній елемент того ж рівня (елемент-сіблінг), якщо він існує.
// console.log(nextSibling);           // вибирає елемент справа від elem
// console.log(nextElementSibling);



// Створюємо заголовок

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы';
console.log(titleEl);

const imageEl = document.createElement('img');
imageEl.src = ' ';
imageEl.alt = 'vkjdnvkjdvjk';
imageEl.width = 640;
console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личний кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);


const navEl = document.querySelector('.site-nav');
console.log(navEl);

navEl.appendChild(navItemEl);
console.log(navEl);


// Создаем и добавляем коллекцию элементов (разметку из массвов)

const colorPickerOptions = [
 {label: 'red', color: '#F44336'},
 {label: 'green', color: '#4CAF50'},
 {label: 'blue', color: '#2196F3'},
 {label: 'grey', color: '#607D8B'},
 {label: 'pink', color: '#E91E63'},
 {label: 'indigo', color: '#3F5185'},
]