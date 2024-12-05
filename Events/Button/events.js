// Создание и удаление слушателя событий
// Именование колбеков для слушателей
// handle: handleSubjectEvent
// hendler: SubjectEventHandler
// on*: onSubjectEvent
// Ссилочная эдентиность коллбеков
// Обьект собития

 const targetBtn = document.querySelector('.js-target-btn');              // вибрали кнопку
 const addListenerBtn = document.querySelector('.js-add-listener') ;      // добавили слушателя
 const removeListenerBtn = document.querySelector('.js-remove-listener'); // удалили слушателя

 addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вешаю слушателя собитий на целевую кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
 });

removeListenerBtn.addEventListener('click', event => {
 console.log(event);
 console.log('Снимаю слушателя собитий на целевую кнопку');

 targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
 console.log(event);
 console.log('Клик по целевой кнопке')
}

// function logMessage() {
//  console.log('Клик по целевой кнопке')
// }

const button = document.querySelector('.js-actions');

function showConsole() {
 console.log("Привет!!")
};

button.addEventListener('click', function(event){
 if (event.target.closest('.js-target-btn') || event.target.closest('.js-add-listener') || event.target.closest('.js-remove-listener')) {
  showConsole()
 }
});

