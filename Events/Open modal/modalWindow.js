/* 
1. Открыть и закрыть по кнопке: onModalOpen u onModalClose
2. Закрыть по клику в бекдроп: onBackDropClick
3. Закрыть по ESC: onEscapeKeypress

В SCC есть класс show-modal, который необходимо добавить 
 на body при открытии модалки
*/

const refs = {
 openModalBtn: document.querySelector('[data-action="open-modal"]'),
 closeModalBtn: document.querySelector('[data-action="close-modal"]'),
 backdrop: document.querySelector('.js-backdrop'),
};

//1. открываем модалку нажатием на кнопку
refs.openModalBtn.addEventListener('click', onModalOpen);

function onModalOpen () {
 window.addEventListener('keydown', onEscKeyPress);  // открыли модалку - повесили
document.body.classList.add('show-modal');
}

//2. закриваем модалку нажатием на кнопку

refs.closeModalBtn.addEventListener('click', onModalClose);

function onModalClose () {
 window.removeEventListener('keydown', onEscKeyPress);  // перед закрытием сняли
 document.body.classList.remove('show-modal');
}

// 3. Закрыть по клику в бекдроп: onBackDropClick

refs.backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick () {
 //document.div.classList.remove('show-modal');
 console.log('Клик на бэкдроп!');

 console.log(event.currentTarget);      // тут всегда будет ссилка на backdrop, т к на нем висит слушатель события на клик, то есть currentTarget - это всегда то, где сисит слушатель события
 console.log(event.target);             // тут тот элемент на которий нажали епосредственно, то ли <p> и т д, а таргет - это непосредственно то, куда мы нажали

 // проверяем клик на бэедроп
if (event.currentTarget === event.target) {
 console.log('Кликнули именно в бекдроп!!!!');
 onModalClose();
}
}
// вешаем слушаеля события на window

// window.addEventListener('keydown', onEscKeyPress); перносим это в  function onModalOpen () {
// document.body.classList.add('show-modal');
// }

function onEscKeyPress(event) {
console.log(event.code);

 // проверяем клик на Escape
if (event.code === 'Escape' || event.code === 'Esc') {
 onModalClose();
}
// onModalClose()
};


