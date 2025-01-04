// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const dropdown = document.getElementById("dropdown");
const deleteButton = document.getElementById("deleteButton");
function deleteElem(event) {
  const index = dropdown.selectedIndex;

  if (index !== -1) {
    dropdown.options[index].remove();
  } else {
    alert("Please select an option to remove!");
  }
}
deleteButton.addEventListener("click", deleteElem);
