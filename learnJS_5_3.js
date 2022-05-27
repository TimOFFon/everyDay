// Сделать первый символ заглавным
/**
 * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
 */

function ucFirst(str) {
    str = str.replace(str[0], str[0].toUpperCase()) ;
    return console.log(str);
}

let str = 'вася';

// ucFirst(str);

//Вариант из LearnJS
function ucFirst3(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
};

//   alert( ucFirst3("вася") ); // Вася
//----------------------------------------------------

//Проверка на спам

/**
 * Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
 */

function checkSpam(str) { 
    (
        !str.toLowerCase().indexOf('viagra')  
        ||
        !str.toUpperCase().indexOf('XXX') 
    ) ?
    console.log(true) :
    console.log(false);
};

// checkSpam('viagra'); // true
// checkSpam('XXX');  // true
// checkSpam('celibacy'); // false

// Ваприант из LearnJS
function checkSpam2(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};

// console.log( checkSpam2('buy ViAgRA now') );
// console.log( checkSpam2('free xxxxx') );
// console.log( checkSpam2("innocent rabbit") );

//-------------------------------------------------
//Усечение строки

/**
 * Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
 */

function truncate(str, maxlength) {
    if (+str.length > maxlength) {
        str = str.slice(0, maxlength - 1) + '...';
    } else {
        str = str;
    }
    return console.log(str);
};

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

// truncate("Всем привет!", 20);

// Вариант LearnJS

function truncate2(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
};

//-------------------------------------------------
//Выделить число

/**
 * Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true
 */

function extractCurrencyValue(str) {
    let value = '';
    for (let i = 0; i < str.length; i++) {
        if(isFinite(str[i]) === true)
        value += str[i]; 
    }

    return console.log(+value);
};

// extractCurrencyValue('$120');

//Вариант LearnJS

function extractCurrencyValue2(str) {
    return +str.slice(1);
};
