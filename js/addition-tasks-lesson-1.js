'use strict';

// Task 1
// "Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль."

const myName = 'Софія';

console.log(myName);

// Task 2
// "Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років"."

let age = 24;

console.log(`Мені ${age} роки`);

// Task 3
// "Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел."

let x = 10;
let y = 10;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Task 4
// "Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль."

const city = 'Poltava';

console.log(`Я живу в місті ${city}`);

// Task 5
// "Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль."

let email = 'sofi.dobriak@gmail.com';
let atIndex = email.indexOf('@');
let emailName = email.slice(0, atIndex);
let emailDomain = email.slice(atIndex + 1);

console.log(emailName);
console.log(emailDomain);

// Task 6
// "Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн"."

let price = 500;
let currency = 'грн';

console.log(`Ціна: ${price} ${currency}`);

// Task 7
// "Створи дві змінні firstName і lastName. Присвой їм своє ім'я та прізвище. Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName. Виведи fullName в консоль."

let firstName = 'Sofi';
let lastName = 'Dobriak';
let fullName = `${firstName} ${lastName}`;

console.log(fullName);

// Task 8
// "Створи дві змінні a і b, присвой їм якісь цілі числа. Виконай над ними додавання, віднімання, множення і ділення. Запиши результати в змінні sum, difference, multiple, division. Виведи всі ці результати в консоль."

let a = 50;
let b = 17;

let sum = a + b;
let difference = a - b;
let multiple = a * b;
let division = a / b;

console.log(`Резульатат додавання: ${sum}`);
console.log(`Резульатат віднімання: ${difference}`);
console.log(`Резульатат множення: ${multiple}`);
console.log(`Резульатат ділення: ${division.toFixed(2)}`);

// Task 9
// "Створи змінну radius і присвой їй деяке значення (наприклад, 5). Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено. Використовуй значення π = 3.14. Запиши результат у змінну area. Виведи area в консоль."

let radius = 5;
const pi = 3.14;
let area = pi * radius ** 2;

console.log(`Площа кола: ${area}`);

// Task 10
// "Створи змінну someString і присвой їй будь-який рядок. Обчисли довжину цього рядка, використовуючи властивість .length. Виведи довжину рядка в консоль."

let someString = 'Hello, JavaScipt!';
let someStringLength = someString.length;

console.log(`Довжина рядка ${someStringLength} символів`);

// Task 11
// "Створи змінну someString і присвой їй будь-який рядок. Створи змінну firstLetter і присвой їй першу літеру рядка someString. Створи змінну lastLetter і присвой їй останню літеру рядка someString."

let someNewString = 'Hello, JavaScipt';
let firstLetter = someNewString[0];
let lastLetter = someNewString[someNewString.length - 1];

console.log(`Перша літера: ${firstLetter}`);
console.log(`Остання літера: ${lastLetter}`);

// Task 12
// "Створи дві змінних str1 та str2. Отримай з кожної змінної останню літер. Створи третю змінну де обєднай попередні літер. Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD""

let str1 = 'Hi';
let str2 = 'Bye';
let str3 = str1[0] + str2[str2.length - 1];

console.log(str3);

// Task 13
/* "Створи змінну userValue та запиши до неї будь-яке число. Створи нову змінну до якої потрібно записати результат математичної операції а саме: userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

Приклади:
для числа 1 = 1 * 5^1 = 5;
для числа 2 = 2 * 5^1 = 10;
для числа 12 = 12 * 5^2 = 300;
для числа 512 = 512 * 5^3 = 64000;"*/

let userValue = 17;
let lengthUserValue = String(userValue).length;
let resultValue = userValue * 5 ** lengthUserValue;

console.log(resultValue);

// Task 14
// "Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль."

const apples = 47;
const grapes = 135;

const total = apples + grapes;
const diff = grapes - apples;

console.log(total);
console.log(diff);

// Task 15
// "Замінити вираз перевизначення комбінованим оператором `+=`."

let students = 100;
students += 50;
console.log(students);

// Task 16
// "Розбери пріоритет операторів в інструкції визначення значення змінної `result`."

const result = 108 + 223 - 2 * 5;
console.log(result);

// Task 17
// "Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B - змінні вставлені у рядок."

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;

console.log(message);
