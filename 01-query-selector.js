import products from "./data/products.js";

// document.querySelector VS element.querySelector


// const magicBtn = document.querySelector('.js-magic-btn')

// console.log(document)

// // // document.querySelector похож на FIND - находит 1е совпадение
// // // если не нашло - возвращает NULL
// // const navEl = document.querySelector('ul') // если нашло, то вернет  1ну ссилку с этим классом, которая подойдет, если НЕ нашло - NULL
// // console.log(navEl)
 
// // document.querySelector похож на FILTER - находит всю коллекцию по селектору
// // если не нашло - возвращает пустой массив

// const navLinkEl = document.querySelectorAll('.site-nav-link')
// console.log(navLinkEl)

// // addEventListener

// magicBtn.addEventListener('click', () =>{
//  const navEl = document.querySelector('ul') // если нашло, то вернет  1ну ссилку с этим классом, которая подойдет, если НЕ нашло - NULL
// console.log(navEl)

// const navLinkEl = document.querySelectorAll('.site-nav-link')
// console.log(navLinkEl)
// });

// magicBtn.addEventListener('click', () =>{
//  const imageEl = document.querySelector('.hero-image')
// console.log(imageEl)

// imageEl.src = './DSC04922.JPG'
// imageEl.alt = 'This is new Max'
// });

// const imageEl = document.querySelector('.hero-image')
// console.log(imageEl)

// const heroTitle =document.querySelector('.hero_title')
// console.log(heroTitle)
// console.log(heroTitle.textContent)
// console.log(imageEl.getAttribute('src'))    // 
// console.log(imageEl.src)                    // возвращает src
// console.log(imageEl.hasAttribute('src'))   //  проверяет есть ли атрбут в imageEl

// // data-атрибути

// const actions = document.querySelectorAll('.js-actions button')
// console.log(actions[0].dataset.action)     // возвращает значение data-action их html документа


// Интерфйс ClassList - у каждого елемента есть этот специаьний интрфейс 
// Это свойство,  кот храниться обьект, у кот в прототипе куча методов

// *- add(класс)
// *- remove(класс)
// *- toggle(класс)
// *- replace(класс)
// *- contains(класс)

// const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList)
// navEl.classList.add('super-cool')       // добавляем 1 или больше классов
// navEl.classList.remove('site-nav')     // // добавляем 1 или больше классов
// navEl.classList.replace('super-cool', 'qwerty') // меняем одно на другое
// navEl.classList.contains('qwerty')     // проверяем содержит ли класс
// console.log(navEl.classList.contains('qwerty'))   // возвращает буль true or false  

// toggle
// magicBtn.addEventListener('click', () => {
//  navEl.classList.toggle('qwerty')
// })

// const magicBtn = document.querySelector('.js-magic-btn')
// const currentPageUrl = '/partfolio';

// const linkEl = document.querySelector(
//  `.site-nav-link[href="${currentPageUrl}"]`)

// console.log(linkEl)

// linkEl.classList.add('site-nav-link--current')  // добавили новий класс


// Создаем заголовок
 
// const titleEl = document.createElement('h1')     // createElement() - создаем тег в памяти
// titleEl.classList.add('page-title')
// titleEl.textContent = 'Это заголовок страниц'

// console.log(titleEl)

// // Создаем изображение

// const imageEl = document.createElement('img');
// imageEl.src = "https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8+%D0%BD%D0%B0+%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9+%D1%81%D1%82%D0%BE%D0%BB&oq=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCTU5NjdqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8#vhid=PR24spfsYBJzUM&vssid=l"
// imageEl.alt = "resume";
// imageEl.width = 360;

//  console.log('imageEl', imageEl)
// console.log(imageEl.width)    // по умолчанию width = 0

// document.body.appendChild(imageEl);   //


// Создаем  и добавляем новий пункт меню

// const navIemElem = document.createElement('li');
// navIemElem.classList.add('site-nav-item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav-link');
// navLinkEl.textContent = ('Личний кабинет')
// navLinkEl.href = '/partfolio'


// console.log(navLinkEl);

// // Добавляем <a> в <li> с помощью .appendChild 
// // собрал гроздь и повесил на дерево за 1 операцию

// navIemElem.appendChild(navLinkEl)
// console.log(navIemElem);

// const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navIemElem)   // добавляем в конец

// // Добавляем <a> в <li> с помощью insertBefore

// navEl.insertBefore(navIemElem, navEl.firstElementChild)  // добавляем перед первим елементом (т е в начало)
// navEl.insertBefore(navIemElem, navEl.lastElementChild )  // добавляем перед последним елементом (т е предпоследним)

// // добавить за 1 операцию 2 и больше элементов 

// // element.append(el1, el2, el3,...)   - добавляет 1 или несколько элементов после всех детей, то есть добавляет в конец
// // element.prepend(el1, el2, el3,...)  - добавляет 1 или несколько элементов перед всеми детьми, то есть добавляет в начало
// // element.after(el1, el2, el3,...)    - добавляет 1 или несколько элементов после элемента
// // element.before(el1, el2, el3,...)   - добавляет 1 или несколько элементов перед элементом


// // Создаем и добавляем коллекцию элементов (разметку из массвов)

// const colorPickerOptions = [
//  {label: 'red', color: '#F44336'},
//  {label: 'green', color: '#4CAF50'},
//  {label: 'blue', color: '#2196F3'},
//  {label: 'grey', color: '#607D8B'},
//  {label: 'pink', color: '#E91E63'},
//  {label: 'indigo', color: '#3F5185'},
// ]

// const colorPickerContainerEl = document.querySelector('.js-color-picker')

// const elements =[];

// использую цикл for()

// for(let i = 0; i < colorPickerOptions.length; i +=1) {
//  const option = colorPickerOptions[i];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// elements.push(buttonEl);

// }
// console.log(elements);

//colorPickerContainerEl.append(...elements);

// использую map()

// const elements = colorPickerOptions.map(option => {
 
//  const buttonEl = document.createElement('button');
//  buttonEl.type = 'button';
//  buttonEl.classList.add('color-picker_options');
//  buttonEl.textContent = option.label;
//  buttonEl.style.backgroundColor = option.color;
//    return buttonEl
// })
// console.log(elements);



// Создаем карточку продукта
// В классе продукта может быть product--on--sale product--not--available

// const product = {
//  name: 'Сервоприводи',
//  description: 'Lorem ipsum...',
//  price: 2000, 
//  available: true,
//  onSale: true,
// };

//  console.log(product);

//const productContainerEl = document.querySelector('.js-products');

// Нужно создать этот элемент по шаблону

{/* <article class ="product">
 <h2 class ="product__name">Название</h2>
 <p class ="product__descr">Описание</p>
 <p class ="product__price">Цена</p>
</article> */}


// // Пишем функцию для создания карточки продукта

// console.log(products);

// //
// const productsContainerEl =document.querySelector('.js-products');   // и появляется разметка

// const makeProductCard = ({name, description, price}) => {
//   const productEl = document.createElement('article'); // создали элемент article
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = price;
//   priceEl.classList.add('product__price');

//   // добавляем в article с помощью append детей:
//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// }

// //console.log(makeProductCard(products[0]))  // вернет <article class="product"></article> в зависимости от индекса , то и возвращает

// // создаем много карточек

// // const elements = products.map(product => {
// // return 'Елемент продукта'
// // })

// const elements = products.map(makeProductCard);  // коллбек
// console.log(elements);
// productsContainerEl.append(...elements);

// // добавляем в article с помощью append детей:


// // console.log(productEl);


// // Парс строк

// const titleEl = document.querySelector('.title');

// titleEl.innerHTML = '<a href="" Это ссилка></a>'
// titleEl.innerHTML = ''              // полностью очисит содержимое тега ( самая бистрая очистка)
// console.log(titleEl.textContent);   // вернет весь текстовий контент без вложених тегов
// console.log(titleEl.innerHTML);     // вернет весь текстовий контент co вложенними тегами 


// const navEl = document.querySelector('.site-nav');

// const firstNavItem = navEl.firstElementChild;
// const parentNodeItem = navEl.parentNode;

// console.log(firstNavItem);
// console.log(parentNodeItem);