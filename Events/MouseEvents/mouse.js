/* Собітия мыши
 * - mouseenter u mouseleave (это ховер)
 * - mouseover u mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Доп материали: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка https://learn.javascript.ru/task/move-ball-field
 */


const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
 boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event){
 const box = event.currentTarget;
 box.classList.add('box-active');
}

function onMouseLeave(event){
 const box = event.currentTarget;
 box.classList.remove('box-active');
}

function onMouseMove(event){
 console.log(event);
}