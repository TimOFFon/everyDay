// LearnJS Object 4.5
//_____________________________________________________
//Конструкторы, создание объектов через "new"

/* ++++++++++++++++++++++"FirtsTask"
Две функции - один объект

Возможно ли создать функции A и B в примере ниже, где объекты равны (new A() == new B())?
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true

Если да – приведите пример вашего кода.
*/
let obj = {};

function A() {
    return obj;
};

function B() {
    return obj;
};

let a = new A;
let b = new B;

// console.log(a == b); // true

//_________________End of "FirstTask" ____________


/* ++++++++++++++++++++++"SecondTask" 
Создание калькулятора при помощи конструктора

Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

read() - запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.

sum() - возвращает сумму введённых свойств.

mul() - возвращает произведение введённых свойств.

Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
    this.read = function() {
        this.firstValue = +prompt('Введите первое значение', 0);
        this.secondValue = +prompt('Введите второе значение', 0);
    };

    this.sum = function() {
        return alert(`Sum = ${this.firstValue += this.secondValue}`);
    };

    this.mul = function() {
        return alert(`Mul = ${this.firstValue *= this.secondValue}`);
    };
};

// let calculator = new Calculator();
// calculator.read();
// calculator.sum();

//_________________ End of "SecondTask" _____________


/*++++++++++++++++++++++"ThirdTask" 
Создаём Accumulator

Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:
--------------------------------------------------------------
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
--------------------------------------------------------------
*/

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.number = +prompt('Введите число', 0);
        return this.value += this.number;
    };
    this.show = function() {
        return alert(this.value);
    };
};

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// accumulator.read();
// accumulator.show();

//___________ End of "ThirdTask" _____________