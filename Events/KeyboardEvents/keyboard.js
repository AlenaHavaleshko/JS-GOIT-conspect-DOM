/*
Тип событий keypress, keydown, keyup
   - Ограничения keypress
   - Свойства KeyboardEvent.key и KeyboardEvent.code
*/

const refs = {
 output: document.querySelector('.js-output'),
 clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeyPress)   // вешаем собитие клавиатури на окно keypress, keydown, keyup

// делаем кнопку очистить
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeyPress(event) {
 //console.log('event.key: ', event.key);
 //console.log('event.code: ', event.code);

refs.output.textContent += event.key;
};


// keydown, keyup - реагирует на нажатие любой клавиши,включая служебние
// keypress - реагирует на нажатие тех клавиш, которие генерят за собой символ
// event.code - свойство code: физическая клавиша на клавиатуре, ее номер или местоположение на клаве
// event.key - свойство key: значние букви, символ, которая велась на том алфавите где ви вводите

function onClearOutput() {
   refs.output.textContent = '';
};