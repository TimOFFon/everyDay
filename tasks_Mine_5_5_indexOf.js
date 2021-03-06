/** Поиск в массиве
 * Array.prototype.indexOf()
 * 
 * Метод indexOf() возвращает первый индекс, 
 * по которому данный элемент может быть найден 
 * в массиве или -1, если такого индекса нет.
 */

/**  Синтаксис
 * arr.indexOf(searchElement[, fromIndex = 0])
 */

/**  Параметры
 * **searchElement**
 * Искомый элемент в массиве.
 * 
 * **fromIndex**
 * Индекс, с которого начинать поиск. 
 * Если индекс больше или равен длине массива, 
 * возвращается -1, что означает, что массив 
 * даже не просматривается. 
 * Если индекс является отрицательным числом, 
 * он трактуется как смещение с конца массива. 
 * Обратите внимание: 
 * если индекс отрицателен, массив всё равно 
 * просматривается от начала к концу. 
 * Если рассчитанный индекс оказывается меньше 0, 
 * поиск ведётся по всему массиву. 
 * Значение по умолчанию равно 0, что означает, 
 * что просматривается весь массив.
 */

/**
 * Описание 
 * Метод indexOf() сравнивает искомый элемент 
 * searchElement с элементами в массиве, используя 
 * строгое сравнение 
 * (тот же метод используется 
 * оператором ===, тройное равно).
 */

//==================================================
//======= Пример: использование indexOf() ==========
//==================================================
const array = [2, 5, 9];
// console.log(array.indexOf(2)); // 0
// console.log(array.indexOf(7)); //  -1
// console.log(array.indexOf(9, 2)); //  2
// console.log(array.indexOf(2, -1)); // -1
// console.log(array.indexOf(2, -3)); // 0


//==================================================
//== Пример: нахождение всех вхождений элемента ====
//==================================================

let searchIndexes = [];
const baseArr = ['a', 'b', 'a', 'c', 'a', 'd'];
const searchElement = 'a';

function searchingIndex(empty, base, elem) {
    let buffer = base.indexOf(elem);
    while (buffer != -1) {
        empty.push(buffer);
        buffer = base.indexOf(elem, buffer + 1);
    }
    console.log(empty);
};

searchingIndex(searchIndexes, baseArr, searchElement);
//[0, 2, 4]