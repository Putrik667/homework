// Задача 1

const number = +prompt("Введите число");
let resultNumber = number % 2 === 0 ? "Четное число" : "Нечетное число";
console.log(resultNumber);
// if (number % 2 === 0) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

// Задача 2

let age = +prompt("your age");
// let discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
let discount;
// if (age < 18) {
//   discount = 10;
// } else if (age <= 65) {
//   discount = 20;
// } else {
//   discount = 30;
// }

let category;

if (age < 18) {
  category = "child";
} else if (age <= 65) {
  category = "man";
} else {
  category = "grandfather";
}

switch (category) {
  case "child":
    discount = 10;
    break;
  case "man":
    discount = 20;
    break;
  case "grandfather":
    discount = 30;
    break;
}

console.log(`Ваша скидка ${discount}%`);

// Задача 3

let username = prompt("Ваше имя");
let password = prompt("Ваш пароль");

if ((username === "admin" || username === "user") && password === "123456") {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

// Задача 4

let weight = +prompt("Вес доставки");
let type = prompt("Тип доставки");

if (weight <= 0) {
  console.log("Некорректный вес посылки");
}

switch (type) {
  case "Стандарт":
  case "Экспресс":
  case "Премиум":
    break;
  default:
    console.log("Неверный тип доставки");
}

let price = weight < 1 ? 5 : weight <= 5 ? 10 : 15;

let coef = type;

switch (coef) {
  case "Стандарт":
    coef = 1;
    break;
  case "Экспресс":
    coef = 1.5;
    break;
  case "Премиум":
    coef = 2;
    break;
}

let result = price * coef;

alert(`Итоговая стоимость доставки ${result}`);
