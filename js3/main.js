//Задача 1

function calculateFinalPrice(basePrice, discount, nds) {
  const discountPrice = basePrice - discount;
  const ndsPrice = discountPrice * nds;
  const finalPrice = discountPrice + ndsPrice;
  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

//Задача 2

function checkAccess(name, password) {
  const username = name;
  const userPassword = password;
  if (username === "admin" && userPassword === 123456) {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
}

console.log(checkAccess("admin", 123456));

//Задача 3

const getTimeOfDay = function (hour) {
  if (hour <= 5) {
    return "Ночь";
  } else if (hour <= 11) {
    return "Утро";
  } else if (hour <= 17) {
    return "День";
  } else if (hour <= 23) {
    return "Вечер";
  } else {
    return "Некорректное время";
  }
};

console.log(getTimeOfDay(+prompt("write hour")));

//Задача 4

const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return "Четных чисел нет";
};

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
