/** Поиск в массиве
 * Array.prototype.findIndex()
 * 
 * Метод findIndex() возвращает индекс в массиве, 
 * если элемент удовлетворяет условию проверяющей 
 * функции. В противном случае возвращается -1.
 * 
 * Синтаксис
 * arr.findIndex(callback[, thisArg])
 * 
 * Параметры
 * 
 * **callback**
 * Функция, вызывающаяся для каждого значения в 
 * массиве, принимает три аргумента:
 * 
 * **element**
 * Текущий обрабатываемый элемент в массиве.
 * 
 * **index**
 * Индекс текущего обрабатываемого элемента в массиве.
 * 
 * **array**
 * Массив, по которому осуществляется проход.
 * 
 * **thisArg (Необязательный)**
 * Значение, используемое в качестве this при 
 * выполнении функции callback.
 */

/**
 * Метод findIndex вызывает переданную функцию 
 * callback один раз для каждого элемента, 
 * присутствующего в массиве, до тех пор, 
 * пока она не вернёт true. 
 * Если такой элемент найден, метод findIndex 
 * немедленно вернёт индекс этого элемента. 
 * В противном случае, метод findIndex вернёт -1. 
 * Функция callback вызывается только для индексов 
 * массива, имеющих присвоенные значения; 
 * она не вызывается для индексов, которые были 
 * удалены или которым значения никогда 
 * не присваивались.
 */

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
        return false;
        }
    }
    return element > 1;
}

  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, не найдено
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2