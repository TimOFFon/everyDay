// LearnJS Object 4.1
//_____________________________________________________
//


/* ++++++++++++++++++++++"FirtsTask"
Привет, object 

Напишите код, выполнив задание из каждого пункта отдельной строкой:

part 1.1 - Создайте пустой объект - user.
part 1.2 - Добавьте свойство name со значением - John.
part 1.3 - Добавьте свойство surname со значением - Smith.
part 1.4 - Измените значение свойства name на - Pete.
part 1.5 - Удалите свойство - name из объекта.
*/
function visualConsole(val1, val2, toggle) {
    if (toggle) return console.log(val1, val2);
};


//-----part 1.1----Creat
const user = {};
const user2 = new Object();

visualConsole(
    user, // {}
    user2, // {}
    // true
);

//-----part 1.2-----addName1
let name2 = 'name2';
let keyName = name2;
let keyValue = 'John2';

user.name = 'John';
user2[keyName] = keyValue;


visualConsole(
    user, // {name: 'John'}
    user2, // {name2: 'John2'}
    // true
);

//-----part 1.3-------addName2
let arrKeys = ['surname2'];

user.surname = 'Smith';
user2[arrKeys[0]] = 'Smith2';

visualConsole(
    user, // {name: 'John', surname: 'Smith'} 
    user2, // {name2: 'John2', surname2: 'Smith2'}
    // true
);

//-----part 1.4-----replaceName
let arrValue = ['Pete2']

user.name = 'Pete';
user2[name2] = arrValue[0];

visualConsole(
    user, // {name: 'Pete', surname: 'Smith'} 
    user2, // {name2: 'Pete2', surname2: 'Smith2'}
    // true
);

//-----part 1.5--- removeName
delete user.name;
delete user2[name2];

visualConsole(
    (name in user), // false
    (name2 in user2), // false
    // true
);

visualConsole(
    ('name' in user), // false
    ('name2' in user2), // false
    // true
);
//___________ End of all "FirstTask" parts ____________


/* +++++++++++++++++++++"SecondTask"
Проверка на пустоту

Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:
------------------------------------    |
let schedule = {};                      |
                                        |
alert( isEmpty(schedule) ); // true     |
                                        |
schedule["8:30"] = "get up";            |
                                        |
alert( isEmpty(schedule) ); // false    |
--------------------------------------  |
*/


//-----SolutionSecondTask--- version-1
let objEmpty = {};
let objFull = new Object();

objFull['Warehouses-1'] = 'Cargo-1';

visualConsole(
    objEmpty, // {}
    objFull, // {Warehouses-1: 'Cargo-1'}
    // true
);

function checkKeysObj(object) {
    let count = 0;
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            count++;
        }
    }
    count !== 0 ? console.log(false) : console.log(true);
}
// checkKeysObj(objEmpty); // true
// checkKeysObj(objFull); // false

//-----SolutionSecondTask--- version-2

function checkKeysObj_V2(object) {
    console.log(!Object.keys(object).length || false);
}

// checkKeysObj_V2(objEmpty); // true
// checkKeysObj_V2(objFull); // false
//___________ End of all "SecondTask" versions _____________


/*++++++++++++++++++++++"ThirdTask"
Объекты-константы?

Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
*/
//-----Answer to "ThirdTask"---------------
/*
Констатнта в данном случае значение переменной (user=....), а не содержание объекта. 
Т.е если присвоить вместо объекта массив, или примитив, то тогда вызов приведёт к ошибке;
*/

const onlyObj = {
    firstValue: 'word',
    secondValue: 111
};

onlyObj.firstValue = 111;

// console.log(onlyObj);//{firstValue: 111, secondValue: 111}

// onlyObj = 111;

// console.log(onlyObj); // Uncaught TypeError: Assignment to constant variable.

//___________ End of "ThirdTask" _____________


/*++++++++++++++++++++++"FourthTask"
Сумма свойств объекта

У нас есть объект, в котором хранятся зарплаты нашей команды:

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let notSalaries = new Object();

//-----SolutionFourthTask------

function summSalaries(object) {
    let element = 0;
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            element += object[key];
        }
    }
    return console.log(element);
};

// summSalaries(salaries); // 390
// summSalaries(notSalaries); // 0

//__________________End of "FourthTask" _____________

/*++++++++++++++++++++++"FifthTask"
Умножаем все числовые свойства на 2

Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

let diferentsValueObject = {
    number1: 111,
    str1: 'one',
    number2: 222,
    str2: 'two',
    number3: 333,
    str3: 'three',
};

function summValueNumbers(object) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof object[key] === 'number') {
                object[key] *= 2;
            }
        }
    }
    return console.log(object);
}

summValueNumbers(diferentsValueObject);
// {number1: 222, str1: 'one', number2: 444, str2: 'two', number3: 666, …}
//__________________End of "FifthTask" _____________

console.log(true);