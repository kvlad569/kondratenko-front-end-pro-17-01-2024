
let length = parseInt(prompt("Введіть довжину масиву:"));
let array = [];
for (let i = 0; i < length; i++) {
    let element = prompt("Введіть елемент масиву " + (i + 1) + ":");
    array.push(element);
}

document.write("Початковий масив: " + array.join(", ") + "<br>");

array.sort();

document.write("Відсортований масив: " + array.join(", ") + "<br>");

// Видалення елементів з масиву з 2 по 4 (включно)
array.splice(1, 4);

// Виведення оновленого масиву на сторінку
document.write("Оновлений масив: " + array.join(", "));