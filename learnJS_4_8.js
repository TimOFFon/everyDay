//================================================================
//==============  Преобразование объектов в примитивы  ===========
//================================================================

/**                      "логическое"
 * 1).  Не существует преобразования к логическому значению. 
 * В логическом контексте все объекты являются true, 
 * всё просто. Существует лишь их числовое и строковое преобразование.
 */


/**                       "математическое"
 * 2). Числовое преобразование происходит, 
 * когда мы ВЫЧИТАЕМ объекты или ПРИМЕЯЕМ математические функции. 
 * Например, объекты Date могут быть вычтены, 
 * и результатом date1 - date2 будет разница во времени 
 * между двумя датами. */


/**                         "строковое"
 * Что касается преобразований к строке – оно обычно происходит, 
 * когда мы выводим на экран объект при помощи alert(obj) 
 * и в подобных контекстах.
 */


//================================================================
//=============================  Хинты  ==========================
//================================================================
/**Существует три варианта преобразования типов, которые происходят 
 * в различных ситуациях. Они называются «хинтами»:
 * 
 *                               'string'
 *                               'number'
 *                               'default'
 *  */

// strin
//____________________________________________________________________
//Для преобразования объекта к строке, когда мы выполняем операцию над объектом, которая ожидает строку

// вывод
let anotherObj = {};

let obj = {};
// alert(obj); // '[object Object]'

// используем объект в качестве ключа
anotherObj[obj] = 123;

//number
//____________________________________________________________________
// явное преобразование
let num = Number(obj);

// математические (не считая бинарного плюса)
let n = +obj; // унарный плюс
// let delta = date1 - date2;

// сравнения больше/меньше
// let greater = user1 > user2;

/**Большинство встроенных математических функций также включают
 *  в себя такое преобразование. */

//default
//______________________________________________________________________
//когда оператор «не уверен», какой тип ожидать.
// бинарный плюс использует хинт "default"
// let total = obj1 + obj2;

// obj == number использует хинт "default"
// if (user == 1) { /*...*/ };


//=====================================================================
//=========  Чтобы выполнить преобразование, JavaScript пытается найти 
//=========  и вызвать  три следующих метода объекта:
//=====================================================================

/**
 *   Вызвать obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.
 *   toPrimitive (системный символ), если такой метод существует,
 * 
 *   Иначе, если хинт равен "string"
 *   попробовать вызвать obj.toString() или obj.valueOf(), смотря какой из них
 *   существует.

 *   Иначе, если хинт равен "number" или "default"
 *   попробовать вызвать obj.valueOf() или obj.toString(), 
 *   смотря какой из них существует.
 */

//================================================================
//================  Symbol.toPrimitive  ==========================
//================================================================

/**
 * 
 * obj[Symbol.toPrimitive] = function(hint) {
 *          вот код для преобразования этого объекта в примитив
 *          он должен вернуть примитивное значение
 *          hint = чему-то из "string", "number", "default"
 * };
 */

/**
 * Если метод Symbol.toPrimitive существует, он используется для 
 * всех хинтов, и больше никаких методов не требуется.
 */

let userExp = {
    name:'John',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == 'string' ? `{name: "${this.name}"}` : this.money;
    }
};


// демонстрация результатов преобразований:
// alert(userExp); //hint: string // {name: "John"}
// alert(+userExp); //hint: number // 1000
// alert(userExp + 500); // hint: default -> 1500

//================================================================
//==================  toString/valueOf  ==========================
//================================================================

/**
 * Если нет <---{??????} Symbol.toPrimitive, тогда JavaScript 
 * пытается найти методы toString и valueOf:
 */

//   toString() - Метод возвращает строку, представляющую объект.
//   valueOf()  - Метод  возвращает примитивное значение указанного объекта.


/**
 * Для хинта "string": вызвать метод toString, а если он не существует,
 *  то valueOf (таким образом, toString имеет приоритет при строковом
 *  преобразовании).
 * 
 * Для других хинтов: valueOf, а если он не существует, то toString
 *  (таким образом, valueOf имеет приоритет для математических операций).
 */


/**
 * Таким образом, если мы попытаемся использовать объект в качестве
 *  строки, как например в alert или вроде того, то по умолчанию мы
 *  увидим [object Object].

 *  Значение по умолчанию VALUEOF упоминается здесь только для полноты
 *  картины, чтобы избежать какой-либо путаницы. Как вы можете видеть, он
 *  ВОЗВРАЩАЕТ САМ ОБЪЕКТ и поэтому игнорируется. Не спрашивайте меня
 *  почему, это по историческим причинам. Так что мы можем предположить,
 *  что ЕГО НЕ СУЩЕСТВУЕТ.
 */


 let userExp2 = {
    name: "John2",
    money: 1000,
  
    // для хинта равного "string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // для хинта равного "number" или "default"
    valueOf() {
      return this.money;
    }
  
  };

// alert(userExp2); // toString -> {name: "John"}
// alert(+userExp2); // valueOf -> 1000
// alert(userExp2 + 500); // valueOf -> 1500


/**
 * В отсутствие Symbol.toPrimitive и valueOf, toString обработает
 *  все примитивные преобразования.
 */


/**
 * По историческим причинам, если toString или valueOf вернёт объект, 
 * то ошибки не будет, но такое значение будет проигнорировано 
 * (как если бы метода вообще не существовало). Это всё потому, 
 * что в древние времена в JavaScript не было хорошей концепции «ошибки».

 * А вот Symbol.toPrimitive уже «четче», этот метод обязан возвращать
 *  примитив, иначе будет ошибка.
 */

//================================================================
//===========  Дальнейшие преобразования  ======================
//================================================================

/**
 * 1). Объект преобразуется в примитив (с использованием правил, 
 *     описанных выше).
 * 
 * 2).Если необходимо для дальнейших вычислений, этот примитив 
 *    преобразуется дальше.
 */

let objStr = {
    // toString обрабатывает все преобразования в случае отсутствия других методов
    toString() {
        return "2";
      }
};

// console.log(objStr * 2); /** */  4, объект был преобразован к примитиву "2", затем умножение сделало его числом */

console.log(objStr + 2); /** 22 ("2" + 2), преобразование к примитиву
 вернуло строку => конкатенация */