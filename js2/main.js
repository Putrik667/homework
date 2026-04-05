//Задача 1

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

// Задача 2

let phaktorial = 1;
let userNumber = +prompt("Введите число для факториала", 1);

for (let number = 1; number <= userNumber; number++) {
  phaktorial = phaktorial * number;
}

alert(`Итоговое число ${phaktorial}`);

// Задача 3, решила нейронка

for (let i = 1; i <= 8; i++) {
  let row = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      row += "#"
    } else {
      row += " "
    }
  }
  console.log(row);
}