// LearnJS Object 4.4
//Методы объекта, "this"
//__________________________________________________


/*++++++++++++++++++++"FirtsTask"
"Проверка синтаксиса"

Каким будет результат выполнения этого кода?
*/
//--------------------------------------------- 
let user = {
        name: "Джон", //
        go: function() { console.log(this.name) }
    } // <---------- !!!   ;                         
    //----------------------------------------------


// (user.go)(); // Uncaught ReferenceError: Cannot access 'user' before initialization


let user2 = {
    name: "Джон",
    go: function() { console.log(this.name) }
}; //<--------- !!!

// (user2.go)(); // 'Джон'

//___________ End of "FirtsTask" ______________

/*++++++++++++++++++++"SecondTask"
Объясните значение "this"

В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
*/

let obj, method;

obj = {
    go: function() { console.log(this); }
};

// obj.go(); // (1) {go: ƒ}

// (obj.go)(); // (2) {go: ƒ}

// (method = obj.go)(); // (3) Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// (obj.go || obj.stop)(); // (4) Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//-----Answer to "TSecondTask"---------------

//(1) обычный вызов
//(2) обычный вызов + оператор группировки ()
//(3) потеря (Reference Type) (f = obj.go; f();)
//(3) потеря (Reference Type) (f = obj.go; f();)

//___________ End of "SecondTask" ______________


/*++++++++++++++++++++"ThirdTask" 

Использование "this" в литерале объекта.

Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?
*/

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user3 = makeUser();


// console.log(user3.ref.name); // Каким будет результат?

//-----Answer to "ThirdTask"

// console.log(user3.ref.name); // ничего (this = window)

// console.log(user3.this); // undefined

// console.log(user3.ref); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// console.log(user3.name); // 'Джон'

//___________ End of "ThirdTask" ______________


/*++++++++++++++++++++"FourthTask" 
Создайте калькулятор

Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.

----------------------------   |
                               |
let calculator = {             |
    // ... ваш код ...         |
  };                           |
                               |
  calculator.read();           |
  alert( calculator.sum() );   |
  alert( calculator.mul() );   |
                               |
-------------------------------|

*/

let calculator = {
    read() {
        this.firstValue = prompt('Введите первое значение', );
        this.SecondValue = prompt('Введите второе значение', );
    },
    sum() {
        return +this.firstValue + +this.SecondValue;
    },
    mul() {
        return +this.firstValue * +this.SecondValue;
    },
};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//___________ End of "FourthTask" ______________

/*++++++++++++++++++++"FifthTask" 
Цепь вызовов

Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1
*/

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this; // <------------------ !!!
    },
    down() {
        this.step--;
        return this; // <------------------ !!!
    },
    showStep: function() { // показывает текущую ступеньку
        alert(this.step);
        return this; // <------------------ !!!
    }
};

// ladder.up().up().down().showStep(); // 1
//___________ End of "FifthTask" ______________