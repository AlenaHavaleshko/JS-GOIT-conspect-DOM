
// console.log(+true);          // 1 
// console.log(!"frontendlib"); // false

// list
//========================


// const title = document.querySelector('.js-title');
// const title1 = document.querySelector('.js-title1');
// const title2 = document.querySelector('.js-title2');

// title.addEventListener('click', onClick);
// title1.addEventListener('click', onClick);
// title2.addEventListener('click', onClick);


// const maxLength = 13;
// const totalLength = maxLength + 3;


// function onClick(evt) {
//  const title = evt.currentTarget;
//  const str = title.textContent.slice(0, maxLength);

//  if(title.textContent.length > totalLength) {
//   const remainder = title.textContent.slice(maxLength);
//   title.setAttribute("data-title", remainder);
//   title.textContent = str + "...";
//  } else {
//   const remainder = title.dataset.title;
//   title.textContent = str + remainder
// }
// }


// input
//========================

// const userName = document.querySelector('.js-input');

// userName.addEventListener('input', onInput);
// function onInput(event) {
//   console.log(event.currentTarget.value);
// }

// form
//========================

const formElement = document.querySelector('.js-form');
formElement.addEventListener('submit', onSubmit);
function onSubmit (event) {
  event.preventDefault();

  const {userAge,userEmail,userName} = event.currentTarget.elements
  console.log(userAge.value);
  console.log(userEmail.value);
  console.log(userName.value);
  console.dir(event.currentTarget);


  const data = {
    name: userName.value,
    email: userEmail.value,
    age: userAge.value,
  }
  console.log(data);
} 

// keyboard event
//========================

document.addEventListener('keypress', onKey);

function onKey(evt) {
  console.log(evt);
}


// burger menu
//========================

// const menuBody = document.querySelector('.menu');

// document.addEventListener("click", menu);

// function menu(event) {
//   if (event.target.closest('.menu_button')) {
//     menuBody.classList.toggle('_active');
//   }
//   if (!event.target.closest('.menu')) {
//     menuBody.classList.remove('_active')
//   }
// }