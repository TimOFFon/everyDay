//===================================================
//=====  border-left-width в borderLeftWidth ======
//===================================================
/**
 * Напишите функцию camelize(str), 
 * которая преобразует строки вида 
 * «my-short-string» в «myShortString».
 * 
 * То есть дефисы удаляются, а все слова после 
 * них получают заглавную букву.
 * 
 * camelize("background-color") == 'backgroundColor';
 * camelize("list-style-image") == 'listStyleImage';
 * camelize("-webkit-transition") == 'WebkitTransition';
 */

let str = 'my-short-string';

function camelize(str) {
    let result = str.split('-');
    console.log(result);
    result = result.map((element, index) => {
        if(index > 0) {
            return element.replace(element[0], element[0].toUpperCase());
        } else {
            return element = element;
        }; 
    });
    result = result.join('');
    return console.log(result);
};

// camelize(str); // myShortString

//===================================================
//===============  Фильтрация по диапазону ==========
//===================================================
/**
 * Напишите функцию filterRange(arr, a, b), 
 * которая принимает массив arr, ищет в нём 
 * элементы между a и b и отдаёт массив этих элементов.
 * 
 * Функция должна возвращать новый массив
 *  и не изменять исходный.
 * 
 * let arr = [5, 3, 8, 1];
 * let filtered = filterRange(arr, 1, 4);
 * alert( filtered ); // 3,1 (совпадающие значения)
 * alert( arr ); // 5,3,8,1 (без изменений)
 */

function filterRange(arr, a, b) {
    return arr.filter(
        element => (element >= a && element <= b)
        );
};

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = filterRange(arrNumbers, 5, 8);

// console.log(arrNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(newArr); // [5, 6, 7, 8]

//===================================================
//======= Фильтрация по диапазону "на месте" =======
//===================================================
/**
 * Напишите функцию filterRangeInPlace(arr, a, b), 
 * которая принимает массив arr и удаляет из него 
 * все значения кроме тех, которые находятся 
 * между a и b. 
 * То есть, проверка имеет вид a ≤ arr[i] ≤ b.
 * Функция должна изменять принимаемый массив и 
 * ничего не возвращать.
 * Например:
 * 
 * let arr = [5, 3, 8, 1];
 * filterRangeInPlace(arr, 1, 4); 
 * // удалены числа вне диапазона 1..4
 * 
 * alert( arr ); // [3, 1]
 */

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element < a || element > b) {
            arr.splice(i, 1);
            i--;
        };
    };
};

const arrNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filterRangeInPlace(arrNumbers2, 3, 7);
// console.log(arrNumbers2);

//===================================================
//======= Сортировать в порядке по убыванию =======
//===================================================

/**
 * let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
 */

let arrUnSort = [5, 2, 1, -10, 8];
let result = arrUnSort.sort((a, b) => b - a);

// console.log(result); //  8, 5, 2, 1, -10

//===================================================
//======= Трансформировать в массив имён =======
//===================================================
/**
 * У вас есть массив объектов user, и 
 * в каждом из них есть user.name. Напишите код, 
 * который преобразует их в массив имён.
 * Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = ... ваш код 

alert( names ); // Вася, Петя, Маша
 */

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function converter(arr) {
    let newArr = arr.map(item => item.name);
    return console.log(newArr);
};

// converter(users); // ['Вася', 'Петя', 'Маша']

//===================================================
//======= Трансформировать в объекты =======
//===================================================

/**
 * У вас есть массив объектов user, и у каждого 
 * из объектов есть name, surname и id.
 * Напишите код, который создаст ещё один массив 
 * объектов с параметрами id и fullName, 
 * где fullName – состоит из name и surname.
 * 
 * Например:
 * 
 * let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
 * let petya = { name: "Петя", surname: "Иванов", id: 2 };
 * let masha = { name: "Маша", surname: "Петрова", id: 3 };
 * let users = [ vasya, petya, masha ];
 * let usersMapped =  ... ваш код ... 
 * 
 * usersMapped = [
 * { fullName: "Вася Пупкин", id: 1 },
 * { fullName: "Петя Иванов", id: 2 },
 * { fullName: "Маша Петрова", id: 3 
 * ]
 * alert( usersMapped[0].id ) // 1
 * alert( usersMapped[0].fullName ) // Вася Пупкин
 */

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };
let users2 = [ vasya2, petya2, masha2 ];

let usersMapped = users2.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); //  Вася Пупкин

//===================================================
//=== Отсортировать пользователей по возрасту =======
//===================================================

/**
 * Напишите функцию sortByAge(users), которая 
 * принимает массив объектов со свойством age и 
 * сортирует их по нему.
 * 
 * sortByAge(arr);
 * теперь: [vasya, masha, petya]
 * alert(arr[0].name); // Вася
 * alert(arr[1].name); // Маша
 * alert(arr[2].name); // Петя
 */
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr3 = [ vasya3, petya3, masha3 ];

function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1);
};
sortByAge(arr3);

// console.log(arr3);
// 0: {name: 'Вася', age: 25}
// 1: {name: 'Маша', age: 28}
// 2: {name: 'Петя', age: 30}

//===================================================
//============== Перемешайте массив ================
//===================================================
/**
 * Напишите функцию shuffle(array), которая 
 * перемешивает (переупорядочивает случайным образом) элементы массива.
 * Многократные прогоны через shuffle могут привести к 
 * разным последовательностям элементов. 
 * Например:
 * let arr = [1, 2, 3];
 * 
 * shuffle(arr);
 * // arr = [3, 2, 1]
 * 
 * shuffle(arr);
 * // arr = [2, 1, 3]
 * 
 * shuffle(arr);
 * // arr = [3, 1, 2]
 * 
 * Все последовательности элементов должны иметь
 * одинаковую вероятность. Например, [1,2,3] может 
 * быть переупорядочено как [1,2,3] или [1,3,2], 
 * или [3,1,2] и т.д., с равной вероятностью каждого 
 * случая
 */

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};


// подсчёт вероятности для всех возможных вариантов
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
// };

// показать количество всех возможных вариантов
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }
// 123: 166813
// 132: 167402
// 213: 166464
// 231: 166225
// 312: 166442
// 321: 166654

//===================================================
//============== Получить средний возраст ===========
//===================================================
/**
 * Напишите функцию getAverageAge(users), которая 
 * принимает массив объектов со свойством age и 
 * возвращает средний возраст.
 * 
 * Формула вычисления среднего арифметического 
 * значения: (age1 + age2 + ... + ageN) / N.
 * 
 * Например:
 * alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 */

let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };

let arr4 = [ vasya, petya, masha ];

function getAverageAge(users) {
    return Math.ceil(users.reduce((prev, user) => prev + user.age, 0) / users.length);
};

let result4 = getAverageAge(arr4);

// console.log(result4);

//===================================================
//==== Оставить уникальные элементы массива =========
//===================================================

/**
 * Пусть arr – массив строк.
 * Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
 * Например:
 * alert( unique(strings) ); // кришна, харе, :-O
 */

let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
        result.push(str);
        };
    };
    return result;
};

let result5 = unique(strings);

// console.log(result5); // ['кришна', 'харе', ':-O']