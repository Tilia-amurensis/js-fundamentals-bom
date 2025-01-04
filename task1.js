// Для заданої HTML-сторінки - index.html коментар task1
// увійдіть у файл task1.js
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку
//  і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
// Запустіть програму за допомогою Live Server
// перевірте виконання за допомогою команди node tests/task1.test.js
const btn = document.querySelector("#btn");
const p = document.querySelector("#text");
function changeCSS(event) {
 p.style.color = "orange";
 p.style.fontSize = "20px";
 p.style.fontFamily = "Comic Sans MS";
}
btn.addEventListener("click", changeCSS);
