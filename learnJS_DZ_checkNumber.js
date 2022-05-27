//Функция pow(x,n)
/* 
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/
let numberX = prompt("x?", '');
let expN = prompt("n?", '');


function exponNumber(x, n) {
    // let result = x;
    for (let i = 1; i < n; ++i) {
        // result = result * x;
        x *= x;
    }
    // return result;
    return x;
}


function checkNumber(x, n) {
    if (n < 1) {
        alert(`Степень ${n} не поддерживается, используйте натуральное число`);
    } else {
        alert(exponNumber(x, n));
    }
}

checkNumber(numberX, expN);