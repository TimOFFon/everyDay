//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
/** 8 kyu Removing Elements
 * Возьмите массив и удалите каждый второй элемент из массива.
 * Всегда сохраняйте первый элемент и начинайте удаление со
 * следующего элемента.
 * Ни один из массивов не будет пустым, так что вам не о чем
 * беспокоиться!
 * 
 * ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
 */

// let arr1 = ["Keep", "Remove", "Keep", "Remove", "Keep"];

function removeEveryOther(arr){
    let resultArr = [];
    arr.forEach((element, index) => {
        if(index % 2 === 0) {
            resultArr.push(element);
        }
    });
    return resultArr;
};

// console.log(removeEveryOther(arr1));

//==================================================================
//==================================================================
//==================================================================
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
/**
 * 8 kyu Reversed Strings
 * 
 * Завершите решение так, чтобы оно перевернуло переданную в него
 * строку.
 * 
 * 'world'  =>  'dlrow'
 * 'word'   =>  'drow'
 */

// let str1 = 'world';
// let str2 = 'word';

function solution(str){
    let workArr = [];
    workArr = str.split('');
    workArr.reverse();
    return workArr.join('');
};

// console.log(solution(str1));

//==================================================================
//==================================================================
//==================================================================
//https://www.codewars.com/kata/57f781872e3d8ca2a000007e
/**
 * 8 kyu Beginner - Lost Without a Map
 * Учитывая массив целых чисел, вернуть новый массив с удвоением
 * каждого значения
 * 
 * [1, 2, 3] --> [2, 4, 6]
 */

// let arr1 = [1, 2, 3];

function maps(x){
    let resultArr = [];
    x.forEach(element => {
        let newElement = element * 2;
        resultArr.push(newElement);
    });
    return resultArr;
};

// console.log(maps(arr1));

//==================================================================
//==================================================================
//==================================================================
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
//8 kyu Count the Monkeys!
/**
 * Вы ведете своего сына в лес, чтобы увидеть обезьян. Вы знаете,
 * что там есть определенное число (n), но ваш сын слишком мал,
 * чтобы просто оценить полное число, ему приходится начинать
 * считать их с 1
 * 
 * Как хороший родитель, вы будете сидеть и считать с ним. Учитывая
 * число (n), заполните массив всеми числами до этого числа
 * включительно, но исключая ноль.
 * 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 1 --> [1]
 */
// let number1 = 10;
// let number2 = 1;

function monkeyCount(n) {
    let resultArr = [];
    let count = 0;
    for (let i = n; i > 0; i--) {
        count++;
        resultArr.push(count);
    };
    return resultArr;
};

// console.log(monkeyCount(number2));

//==================================================================
//==================================================================
//==================================================================
//https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
//8 kyu What is between?
/**
 * Завершите функцию, которая принимает два целых числа (a, b, где a
 * < b), и верните массив всех целых чисел между входными
 * параметрами, включая их.
 * a = 1
 * b = 4
 * --> [1, 2, 3, 4]
 */
// let a = 1;
// let b = 4;


function between(a, b) {
    let resultArr = [];
    for (let  i = a;  i <= b; i++) {
        resultArr.push(i);
    };
    return resultArr;
}

// console.log(between(a, b));

//==================================================================
//==================================================================
//==================================================================
//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55
//8 kyu My head is at the wrong end!

/**
 * Ты в зоопарке... все сурикаты выглядят странно. Что-то пошло не
 * так — кто-то поменял местами головы и хвосты!
 * 
 * Спасите животных, переключив их обратно. Вам будет предоставлен
 * массив, который будет иметь три значения (хвост, тело, голова).
 * Ваша задача — переупорядочить массив так, чтобы животное
 * располагалось в правильном порядке (голова, тело, хвост).
 * 
 * То же самое касается всех других массивов/списков, которые вы
 * получите в тестах: вы должны изменить позиции элементов с той же
 * точной логикой.
 * 
 * ["tail", "body", "head"] => ["head", "body", "tail"]
 * ["tails", "body", "heads"] => ["heads", "body", "tails"]);
 * ["bottom", "middle", "top"] => ["top", "middle", "bottom"]);
 * ["lower legs", "torso", "upper legs"] => ["upper legs", "torso", "lower legs"]);
 * ["ground", "rainbow", "sky"] => ["sky", "rainbow", "ground"]);
 */
// let arr1 = ["tail", "body", "head"];
// let arr2 = ["tails", "body", "heads"];
// let arr3 = ["bottom", "middle", "top"];
// let arr4 = ["lower legs", "torso", "upper legs"];
// let arr5 = ["ground", "rainbow", "sky"];

function fixTheMeerkat(arr) {
    let resultArr = arr.slice();
    let boofer = resultArr[0];
    resultArr[0] = resultArr[resultArr.length - 1];
    resultArr[resultArr.length - 1] = boofer;
    return resultArr;
};

// console.log(fixTheMeerkat(arr1));