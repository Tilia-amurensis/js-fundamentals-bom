// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js
const browserWidth = document.getElementById("widthValue");
const browserHeight = document.getElementById("heightValue");
browserWidth.innerHTML =  document.documentElement.clientWidth;
browserHeight.innerHTML = document.documentElement.clientHeight;