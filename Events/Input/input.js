/* Паттерн "Обьект ссилок"

    * Собития
     * - focus u blur
     * - inpu u change
     * - Чекбокси и свойства checked
 *  */

// const  input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// Для удобства строки 9-12 помещаем в обьект ссилок на элементи
// Паттерн "Обьект ссилок"

const refs = {
 input: document.querySelector('.js-input'),
 nameLabel: document.querySelector('.js-button > span'),
 licenseCheckbox: document.querySelector('.js-license'),
 btn: document.querySelector('.js-button'),
}

// Для текстових полей типа input u textarea мы используем 'input' NE 'chage'


// 1 собитие получить/потерять фокус

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur);

refs.input.addEventListener('change', onInputChande)  // 'change' - получаем згачение инпута, не используем на текстових полях, только на checkbox u radio-button
refs.input.addEventListener('input', onInputChande)   // 'input' - каждое изменение внутри элемента, используем для ввода текста 


// 2 Задача при вводе текста в инпуте
function onInputFocus() {
 console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
 console.log('Инпут потерял фокус - событие blur');
}

function onInputChande() {
 console.log(event.currentTarget.value);
 refs.nameLabel.textContent = event.currentTarget.value;     // размер кнопки изменяется, когда ввожу в инпуте имени имя, и оно же появляется вместо аноним в кнопке
}

//3 Нам необходимо,чтоб кнопка била активная, только тогда когда ми чекнули чекбокс 
// собитие 'change' работает для чекбоксов и радиобаттонов, срабативает при изменении состояния

 refs.licenseCheckbox.addEventListener('change', onlicenseChande)

function onlicenseChande() {
 console.log(event.currentTarget.checked);              // чекнутий-не чекнутий
 console.log('refs.btn.disabled:', refs.btn.disabled);  // атрибут disabled = свойство disabled 
 refs.btn.disabled = !event.currentTarget.checked;      // Кнопка виключена, когда не чекнут чекбокс, то есть включена/выключена
}