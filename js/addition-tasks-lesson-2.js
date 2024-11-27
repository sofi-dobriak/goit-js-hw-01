'use strict';

// Task 1
// "Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false."

function isEqualFirstLastLetters(str1, str2) {
    const firstLetter = str1[0];
    const lastLetter = str2[str2.length - 1];

    if (firstLetter === lastLetter) {
        return true;
    }

    return false;
}

console.log(`Задача 1: ${isEqualFirstLastLetters('hi', 'ih')}`);

// Task 2
// "Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false."

function isEqualFirstLetters(str1, str2) {
    const firstLetter = str1[0];
    const lastLetter = str2[0];

    if (firstLetter === lastLetter) {
        return true;
    }

    return false;
}

console.log(`Задача 2: ${isEqualFirstLetters('hi', 'ih')}`);

// Task 3
// "Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false."

function isEqualLengthStrings(str1, str2) {
    let firstStringLength = str1.length;
    let secondStringLength = str2.length;

    if (firstStringLength === secondStringLength) {
        return true;
    }

    return false;
}

console.log(`Задача 3: ${isEqualLengthStrings('hi', 'ihh')}`);

// Task 4
// "Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false."

function isEvenNumberOfDigit(num) {
    let numberLendth = String(num).length;

    if (numberLendth % 2 === 0) {
        return true;
    }

    return false;
}

console.log(`Задача 4: ${isEvenNumberOfDigit('hi', 'ih')}`);

// Task 5
// "Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false."

function IsBiggerNumber(num1, num2) {
    if (num1 > num2) {
        return true;
    }

    return false;
}

console.log(`Задача 5: ${IsBiggerNumber(200, 20)}`);

// Task 6
// "Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false."

function hasResidual(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    }

    return false;
}

console.log(`Задача 6: ${hasResidual(200, 23)}`);

// Task 7
// "Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false."

function IsOddNumber(num) {
    if (num % 2 === 1) {
        return true;
    }

    return false;
}

console.log(`Задача 7: ${IsOddNumber(201)}`);

// Task 8
// "Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false."

function HasCapitalLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toLowerCase()) {
            return true;
        }
    }

    return false;
}

console.log(`Задача 8: ${HasCapitalLetter('Hello')}`);

// Task 9
// "Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false."

function isEqualLength(str1, str2) {
    let firstStringLength = str1.length;
    let secondStringLength = str2.length;

    if (firstStringLength > secondStringLength) {
        return true;
    }

    return false;
}

console.log(`Задача 9: ${isEqualLength('Hello', 'Heyy')}`);

// Task 10
// "Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false."

function hasSpace(str) {
    let spaceIndex = str.indexOf(' ');

    if (spaceIndex === -1) {
        return false;
    }

    return true;
}

console.log(`Задача 10: ${hasSpace('Hello')}`);

// Task 11
// "Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false."

function isPalindrome(str) {
    str = str.toLowerCase().split(' ').join();
    let reverceString = str.split('').reverse().join('');

    if (str === reverceString) {
        return true;
    }

    return false;
}

console.log(`Задача 11: ${isPalindrome('Anna')}`);

// Task 12
// "Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false"

function isLessNumber(num1, num2) {
    if (num1 <= num2) {
        return true;
    }

    return false;
}

console.log(`Задача 12: ${isLessNumber(136, 25)}`);

// Task 13
// "Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо перша літера str є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false."

function hasVowelLetter(str) {
    let vowelLetter = ['a', 'e', 'i', 'o', 'u'];

    if (vowelLetter.includes(str[0].toLowerCase())) {
        return true;
    }

    return false;
}

console.log(`Задача 13: ${hasVowelLetter('eho')}`);

// Task 14
// "Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 і num2 рівні. В іншому випадку функція повинна повернути булеве значення false."

function isEqual(num1, num2) {
    if (num1 === num2) {
        return true;
    }

    return false;
}

console.log(`Задача 14: ${isEqual(15, 18)}`);

// Task 15
// "Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше або дорівнює нулю. В іншому випадку функція повинна повернути булеве значення false."

function isEqualZero(num) {
    if (num >= 0) {
        return true;
    }

    return false;
}

console.log(`Задача 15: ${isEqualZero(15)}`);

// Task 16
// "Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо довжина str є парною. В іншому випадку функція повинна повернути булеве значення false."

function isEvenStringLength(str) {
    let stringLength = str.length;

    if (stringLength % 2 === 0) {
        return true;
    }

    return false;
}

console.log(`Задача 16: ${isEvenStringLength('Key')}`);

// Task 17
// "Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше 100, але менше 200. В іншому випадку функція повинна повернути булеве значення false."

function isNumInRange(num) {
    if (num > 100 && num < 200) {
        return true;
    }

    return false;
}

console.log(`Задача 17: ${isNumInRange(150)}`);

// Task 18
// "Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить лише маленькі літери. В іншому випадку функція повинна повернути булеве значення false."

function isLowerLetter(str) {
    let lowerString = str.toLowerCase();

    for (let i = 0; i <= str.length; i++) {
        if (str[i] !== lowerString[i]) {
            return false;
        }
    }

    return true;
}

console.log(`Задача 18: ${isLowerLetter('Dog')}`);

// Task 19
// "Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false."

function isIncludeString(str1, str2) {
    let lowerString1 = str1.toLowerCase();
    let lowerString2 = str2.toLowerCase();

    if (lowerString2.includes(lowerString1)) {
        return true;
    }

    return false;
}

console.log(`Задача 19: ${isIncludeString('Apple', 'pinapple')}`);

// Task 20
// "Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є негативним числом. В іншому випадку функція повинна повернути булеве значення false."

function isNegativNumber(num) {
    if (num < 0) {
        return true;
    }

    return false;
}

console.log(`Задача 20: ${isNegativNumber(-37)}`);

// Task 21
// "Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо різниця між num1 та num2 більше 50. В іншому випадку функція повинна повернути булеве значення false."

function isBiggerDifference(num1, num2) {
    let difference = num1 - num2;

    if (difference > 50) {
        return true;
    }

    return false;
}

console.log(`Задача 21: ${isBiggerDifference(150, 15)}`);

// Task 22
// "Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є нуль. В іншому випадку функція повинна повернути булеве значення false."

function hasZero(num) {
    num = String(num);

    if (num.includes('0')) {
        return true;
    }

    return false;
}

console.log(`Задача 22: ${hasZero(151)}`);

// Task 23
// "Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false."

function isVowelLastLetter(str1) {
    let vowerlLetters = ['a', 'e', 'i', 'o', 'u'];
    let lastStringLetter = str1[str1.length - 1];

    for (let index of vowerlLetters) {
        if (lastStringLetter === index) {
            return true;
        }
    }

    return false;
}

console.log(`Задача 23: ${isVowelLastLetter('Sunshine')}`);

// Task 24
// "Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є кратним 10. В іншому випадку функція повинна повернути булеве значення false."

function isMultipleNumber(num) {
    if (num % 10 === 0) {
        return true;
    }

    return false;
}

console.log(`Задача 24: ${isMultipleNumber(23)}`);
