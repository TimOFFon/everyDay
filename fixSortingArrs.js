//==============================================================
// Закрепление метода sort()
//==============================================================



//============================================================
// Сортировка без параметра-функции
//============================================================
/**сравнеие идёт преобразованных в строки значений, по прапвилам
 * сравнения строк. Порядок берётся из Unicode.
 */


// console.log([1, 2, 3, 4].sort());// [1, 2, 3, 4]

// console.log([1, 2, 10, 21].sort());// [1, 10, 2, 21]

// console.log(['a', 'bb', 'ccc', 'dddd'].sort());// ['a', 'bb', 'ccc', 'dddd']

// console.log(['арбузы', 'бананы', 'Вишня'].sort());// ['Вишня', 'арбузы', 'бананы']

// console.log(['слово', 'Слово', '1 Слово', '2 Слова'].sort());// ['1 Слово', '2 Слова', 'Слово', 'слово']

// console.log(['A', 'a', 'b', 'c'].sort()); //['A', 'a', 'b', 'c']
// console.log(['ава', 'Ава'].sort()); //['Ава', 'ава']

//============================================================
// Сортировка c параметром-функцией
//============================================================
// [2, 1, 5, 4, 3]
           //a  b
// console.log([2, 1, 5, 4, 3].sort((a, b) => a-b)); // [1, 2, 3, 4, 5]
// console.log([2, 1, 5, 4, 3].sort((a, b) => b-a)); // [5, 4, 3, 2, 1]

// let arrObjSort = [{key: 0, value: 1}, {key:  1, value: 2}, {key:  1, value: 2}, {key: 2, value: 3}, {key: 2, value: 3}, {key: 2, value: 3}, {key: 3, value: 1}, {key: 4, value: 1}];

// console.log(arrObjSort.sort((a,b) => {
// return  a.value - b.value || a.key - b.key;
// }));

//==============================================================
//====================   sort()   ============================
//==============================================================
//https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

//8kyu Merge two sorted arrays into one

/**
 * Вам даны два отсортированных массива, оба из которых содержат
 * только целые числа. Ваша задача — найти способ объединить их в
 * один, отсортированный по возрастанию. Завершите функцию
 * mergeArrays(arr1, arr2), где arr1 и arr2 — исходные
 * отсортированные массивы.
 * 
 * Вам не нужно беспокоиться о проверке, так как arr1 и arr2
 * должны быть массивами с 0 или более целыми числами. Если и
 * arr1, и arr2 пусты, просто верните пустой массив
 * 
 * Примечание: arr1 и arr2 могут быть отсортированы в разном
 * порядке. Также arr1 и arr2 могут иметь одинаковые целые числа.
 * Удалить дубликаты в возвращаемом результате.
 * 
 * Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

 */

// let arr1_0 = [];
// let arr2_0 = [];

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let arr1_2 = [1, 3, 5, 7, 9];
// let arr2_2 = [10, 8, 6, 4, 2];

// let arr1_3 = [1, 3, 5, 7, 9, 11, 12];
// let arr2_3 = [1, 2, 3, 4, 5, 10, 12];

function mergingArrs(arrA, arrB) {
    let workArr = [];
    let resultArr = [];
    workArr = arrA.concat(arrB);
    workArr.forEach(element => {
        if(!resultArr.includes(element)) {
            resultArr.push(element);
        }
    });
    return resultArr.sort((a, b) => a - b);
}

// console.log(mergingArrs(arr1, arr2));
// console.log(mergingArrs(arr1_2, arr2_2));
// console.log(mergingArrs(arr1_3, arr2_3));

/**
 * alternative - new Set([iterable]);
 */

//==============================================================
//====================   sort()   ============================
//==============================================================
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
//8 kyu Sort and Star
/**
 * Вам будет дан вектор строк. Вы должны отсортировать его
 * алфавитном порядке (с учетом регистра и на основе значений
 * символов ASCII), а затем вернуть первое значение.
 * 
 * Возвращаемое значение должно быть строкой и иметь «***» между
 * каждой буквой.
 * 
 * Вы не должны удалять или добавлять элементы из/в массив.
 * 
 * ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n'
 * 
 * ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] => 'a***r***e'
 */

// let arrStr1 = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];

// let arrStr2 = ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"];



function sortingString(arr) {
    return arr.sort()[0].split('').join('***');
};

// console.log(sortingString(arrStr1));
// console.log(sortingString(arrStr2));

//==============================================================
//====================   sort()   ============================
//==============================================================
//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

//7 kyu Sort by Last Char

/**
 * Учитывая строку слов (x), вам нужно вернуть массив слов
 * отсортированных в алфавитном порядке по последнему символу в
 * каждом.
 * 
 * Если два слова имеют одинаковую последнюю букву, возвращаемый
 * ими массив должен отображать их в том порядке, в котором они
 * появились в данной строке.
 * 
 * 'man i need a taxi up to ubud' => ['a', 'need', 'ubud', 'i',
 * 'taxi', 'man', 'to', 'up']
 * 
 * 'what time are we climbing up the volcano'=> ['time', 'are',
 * 'we', 'the', 'climbing', 'volcano', 'up', 'what']
 * 
 * 'take me to semynak' => ['take', 'me', 'semynak', 'to']
 */

// let str1 = 'man i need a taxi up to ubud';
// let str2 = 'what time are we climbing up the volcano';
// let str3 = 'take me to semynak';

function splitingStrInArr(str) {
    let workArr = str.split(' ');
    workArr.sort((a, b) => {
        if(a[a.length - 1] > b[b.length - 1]) {
            return 1;
        }; 

        if(a[a.length - 1] === b[b.length - 1]) {
            return 0;
        }

        return -1;
    });
    return workArr;
};

// console.log(splitingStrInArr(str1));
/**
 * alternative - String.prototype.localeCompare()
 */

//==============================================================
//====================   sort()   ============================
//==============================================================
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
// 7 kyu Simple Fun #176: Reverse Letter

/**
 * Дана строка str, инвертировать ее, опуская все неалфавитные
 * символы.
 * Строка состоит из строчных латинских букв, цифр и символов.
 * 
 * "krishan" => "nahsirk"
 * "ultr53o?n" => "nortlu"
 */

// let str1 = 'krishan'; // "nahsirk"
// let str2 = 'ultr53o?n'; //"nortlu"
// let str3 = 'ab23c'; // "cba"
// let str4 = 'krish21an'; //"nahsirk"

function invertStr(str) {
    let workArr = str.split('').reverse();
    let result = [];
    workArr.forEach(element => {
        if(element.match(/[a-z]/i)) {
            result.push(element);
        };
    });
    return result.join('')
};

// console.log(invertStr(str1));

//==============================================================
//====================   sort()   ============================
//==============================================================
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
//6 kyu Your order, please

/**
 * Ваша задача — отсортировать заданную строку. Каждое слово в
 * строке будет содержать одно число. Это число и есть позиция
 * которую должно занимать слово в результате.
 * 
 * Примечание. Цифры могут быть от 1 до 9. Таким образом, первым
 * словом будет 1 (а не 0).
 * 
 * Если входная строка пуста, вернуть пустую строку. Слова во
 * входной строке будут содержать только допустимые последовательные
 * числа.
 * 
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

// let str1 = "is2 Thi1s T4est 3a"
// let str2 = "4of Fo1r pe6ople g3ood th5e the2"
// let str3 = '';

function sortingNumInStr(str) {
    let workArr = str.split(' ');
    return workArr.sort((a,b) => a.match(/\d+/g) - b.match(/\d+/g)).join(' ');
};

// console.log(sortingNumInStr(str1));