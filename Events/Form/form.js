/* 
* - событие submit
*- Действия браузера по умолчанию
*- Свойство elements
*- Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
*/

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
 event.preventDefault();

 console.log('Это сабмит форми');

 const formElements = event.currentTarget.elements;
 console.dir(formElements);

 // const mail = formElements.email.value;    // ссылки а элементи
 // const password = formElements.password.value;
 // const subscription = formElements.subscription.value; 
 // const formData = {
 //  mail,
 //  password,
 //  subscription
 // }

 // вместо строчек 20-26 можно заюзать formData
 const formData = new FormData(event.currentTarget);
 formData.forEach((value,name) => {
  console.log('onFormSubmit -> name', name);
  console.log('onFormSubmit -> value', value);
 })
 console.log(formData);
}