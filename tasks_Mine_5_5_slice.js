/** ДОБАВЛЕНИЕ/УДАЛЕНИЕ Array.prototype.slice()
 * Метод slice() возвращает новый массив, 
 * содержащий копию части исходного массива.
 * 
 * Синтаксис
 *  arr.slice([begin[, end]])
 * 
 * Параметры
 * **begin** Необязательный
 * Индекс (счёт начинается с нуля), по которому начинать 
 * извлечение.
 * Если индекс отрицательный, begin указывает смещение от 
 * конца последовательности. 
 * Вызов slice(-2) извлечёт два 
 * последних элемента последовательности.
 * Если begin не определён, slice() начинает 
 * работать с индекса 0.
 * Если begin больше длины последовательности вернётся 
 * пустой массив.
 * 
 * 
 * **end** Необязательный
 * Индекс (счёт начинается с нуля), по которому 
 * заканчивать извлечение. 
 * Метод slice() извлекает элементы с индексом меньше end.
 * Вызов slice(1, 4) извлечёт элементы со второго 
 * по четвёртый (элементы по индексам 1, 2 и 3).
 * Если индекс отрицательный, end указывает смещение 
 * от конца последовательности. 
 * Вызов slice(2, -1) извлечёт из последовательности 
 * элементы начиная с третьего элемента с начала 
 * и заканчивая вторым с конца.
 * Если end опущен, slice() извлекает 
 * все элементы до конца последовательности (arr.length).
 * 
 * Возвращаемое значение
 * Новый массив, содержащий извлечённые элементы.
 * 
 * Описание
 * Метод slice() не изменяет исходный массив, 
 * а возвращает новую «одноуровневую» копию, 
 * содержащую копии элементов, вырезанных из 
 * исходного массива. 
 * 
 * Элементы исходного массива копируются в новый массив 
 * по следующим правилам:
 * 
 * Ссылки на объекты (но не фактические объекты): 
 * метод slice() копирует ссылки на объекты 
 * в новый массив. 
 * И оригинал, и новый массив ссылаются на 
 * один и тот же объект. 
 * То есть, если объект по ссылке будет изменён, 
 * изменения будут видны и в новом, и в исходном массивах.
 * 
 * Строки и числа (но не объекты String и Number): 
 * метод slice() копирует значения строк и чисел 
 * в новый массив. 
 * Изменения строки или числа в одном массиве 
 * никак не затрагивает другой.
 * 
 * Если к любому массиву будет добавлен новый элемент, 
 * это никак не повлияет на другой массив.
 */

//--------------------------------------------------------
//-------------------**begin**---------------------------
//--------------------------------------------------------
//Если индекс отрицательный, begin указывает смещение от конца
let arrSorce00 = ['первый', 'второй', 'третий', 'четвёртый'];
// let arrClone00 = arrSorce00.slice(-3);


// console.log(arrClone00); // ['второй', 'третий', 'четвёртый']

//-------------------------------------------------------------
//Вызов slice(1, 4) извлечёт элементы со второго по четвёртый
let arrSorce01 = ['первый', 'второй', 'третий', 'четвёртый'];
// let arrClone01 = arrSorce01.slice(1, 4);


// console.log(arrClone01); // ['второй', 'третий', 'четвёртый']

//-------------------------------------------------------------
//Если индекс отрицательный, begin указывает смещение от конца
let arrSorce02 = ['первый', 'второй', 'третий', 'четвёртый'];
// let arrClone02 = arrSorce02.slice(-4);

// console.log(arrClone02); // ['первый', 'второй', 'третий', 'четвёртый']

//-------------------------------------------------------------
//Вызов slice(-2) извлечёт два последних элемента
let arrSorce03 = ['первый', 'второй', 'третий', 'четвёртый'];
// let arrClone03 = arrSorce03.slice(-2);


// console.log(arrClone03); // ['третий', 'четвёртый']

//-------------------------------------------------------------
// Если begin не определён, slice() начинает работать с индекса 0.
let arrSorce04 = ['первый', 'второй', 'третий', 'четвёртый'];
// let arrClone04 = arrSorce04.slice();

// console.log(arrClone04); //['первый', 'второй', 'третий', 'четвёртый']


//-------------------------------------------------------------
//Если begin больше длины последовательности вернётся пустой массив.
let arrSorce05 = ['первый', 'второй', 'третий', 'четвёртый'];
// let arrClone05 = arrSorce05.slice(5);

// console.log(arrClone05); // []


//--------------------------------------------------------
//-------------------**end**---------------------------
//--------------------------------------------------------
//end - извлекает с нуля и меньше чем end

//-----------------------------------------------------------
//Вызов slice(1, 4) извлечёт элементы со второго по четвёртый
// !!! НЕ ВКЛЮЧАЯ END
let arrSorce20 = ['первый', 'второй', 'третий', 'четвёртый', 'пятый'];
// let arrClone20 = arrSorce20.slice(1, 4);

// console.log(arrClone20);

//-----------------------------------------------------------
//Если индекс отрицательный, end указывает смещение от конца
let arrSorce21 = ['первый', 'второй', 'третий', 'четвёртый', 'пятый'];
// let arrClone21 = arrSorce21.slice(1, -3);

// console.log(arrClone21); // ['второй']

//------------------------------------------------------------
//Вызов slice(2, -1) с третьего элемента с начала и  вторым с конца.
let arrSorce22 = ['первый', 'второй', 'третий', 'четвёртый', 'пятый'];
// let arrClone22 = arrSorce22.slice(2, -1);

// console.log(arrClone22); // ['третий', 'четвёртый']

//------------------------------------------------------------
let arrSorce23 = ['первый', 'второй', 'третий', 'четвёртый', 'пятый'];
// let arrClone23 = arrSorce23.slice(1, arrSorce23.length);

// console.log(arrClone23); // ['второй', 'третий', 'четвёртый', 'пятый']

//--------------------------------------------------------------
// Если end опущен, slice() извлекает все элементы

let arrSorce24 = ['первый', 'второй', 'третий', 'четвёртый', 'пятый'];
// let arrClone24 = arrSorce24.slice(1);

// console.log(arrClone24); // ['второй', 'третий', 'четвёртый', 'пятый']



//==============================================================
//=========== Пример с сылкой на объект ========================
//==============================================================

let myTesla = {
    color: 'red',
    wheels: 4,
    engine: {
        cylinders: 4,
        size: 2.2
    }
};

let myCar = [myTesla, 'ModelS', 'подписка (FSD) на год', 'made in 2020'];
let nowYouCar = myCar.slice(0, 2);

// Отображаем цвет myTesla, myCar и nowYouCar 
//  по ссылкам из обоих массивов.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('nowYouCar[0].color = ' + nowYouCar[0].color);
//myCar[0].color = red
//tasks_Mine_5_5_slice.js:177 nowYouCar[0].color = red

// Изменяем цвет myTesla.
myTesla.color = 'black';
console.log('Новый цвет не моей Tesla - ' + myTesla.color);
//Новый цвет не моей Tesla - black

// Отображаем цвет myTesla, myCar и nowYouCar 
//  по ссылкам из обоих массивов.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('nowYouCar[0].color = ' + nowYouCar[0].color);
//myCar[0].color = black
//tasks_Mine_5_5_slice.js:186 nowYouCar[0].color = black

//==============================================================
//=========== Пример с Массивоподобными объектами ==============
//==============================================================
/**
 * Метод slice() также может использоваться для преобразования 
 * массивоподобных объектов / коллекций в новый массив Array.
 * 
 * Вам просто нужно привязать метод к объекту.
 * 
 * Псевдомассив *arguments* внутри функции как раз является 
 * примером «массивоподобного объекта».
 */

function list() {
    return Array.prototype.slice.call(arguments, 0);
};

  var list1 = list(1, 2, 3); // [1, 2, 3]

    /**
   * Привязка может быть осуществлена посредством 
   * функции .call() из прототипа функции Function.prototype, 
   * также запись может быть сокращена 
   * до [].slice.call(arguments) вместо использования 
   * Array.prototype.slice.call(). 
   * В любом случае, она может быть упрощена посредством 
   * использования функции bind()
   */

let unboundSlice = Array.prototype.slice;
let slice = Function.prototype.call.bind(unboundSlice);

function list() {
    return slice(arguments, 0);
};

     let list1 = list(1, 2, 3); // [1, 2, 3]