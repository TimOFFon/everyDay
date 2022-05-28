/** Поиск в массиве
 * Array.prototype.lastIndexOf()
 * 
 * Метод lastIndexOf() возвращает последний индекс, 
 * по которому данный элемент может быть найден 
 * в массиве или -1, если такого индекса нет. 
 * Массив просматривается от конца к началу, 
 * начиная с индекса fromIndex.
 */

const toys = ['car', 'bear', 'doll', 'car'];

// console.log(toys.lastIndexOf('car')); // 3

// console.log(toys.lastIndexOf('bear')); // 1

/**  Синтаксис
 * arr.lastIndexOf(searchElement[, fromIndex = 
 * arr.length])
 * 
 *   Параметры
 * 
 * **searchElement **
 * 
 * Искомый элемент в массиве.
 * 
 * **fromIndex** (Необязательный)
 * 
 * Индекс, с которого начинать поиск в обратном 
 * направлении. 
 * Если индекс больше или равен длине массива, 
 * просматривается весь массив. 
 * Если индекс является отрицательным числом, 
 * он трактуется как смещение с конца массива. 
 * Обратите внимание: если индекс отрицателен, 
 * массив всё равно просматривается от конца к началу. 
 * Если рассчитанный индекс оказывается меньше 0, 
 * массив даже не просматривается. 
 * Значение по умолчанию равно длине массива, 
 * что означает, что просматривается весь массив.
 */

const array2 = [2, 5, 9, 2];

// console.log(array2.lastIndexOf(2)); // 3
// console.log(array2.lastIndexOf(7)); //  -1
// console.log(array2.lastIndexOf(2, 3)); // 3
// console.log(array2.lastIndexOf(2, 2)); // 0
// console.log(array2.lastIndexOf(2, -2)); // 0
// console.log(array2.lastIndexOf(2, -1)); // 3


//==================================================
//== Пример: нахождение всех вхождений элемента ====
//==================================================


let searchIndexes = [];
const baseArr = ['a', 'b', 'a', 'c', 'a', 'd'];
const searchElement = 'a';

function searchingIndex(empty, base, elem) {
    let buffer = base.lastIndexOf(elem);
    while (buffer != -1) {
        empty.push(buffer);
        buffer = (buffer > 0 ? base.lastIndexOf(elem, buffer - 1) : -1);
    }
    console.log(empty);
};

searchingIndex(searchIndexes, baseArr, searchElement);
//[4, 2, 0]