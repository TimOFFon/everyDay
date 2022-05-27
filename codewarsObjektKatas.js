// Object
//////////////////////////////////////////////////

//https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript

//7 kyu Add property to every object in array

/* 
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example: 
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
*/

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function loadKey(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].usersAnswer = null;
    }
    return arr;
};

// loadKey(questions);

//////////////////////////////////////////////////
//https://www.codewars.com/kata/599a6aaf1924716c3000003f/train/javascript

//ES2015: Build an object which can't be modified

/*Объявите переменную с именем stone, которую нельзя изменить.

Начальное значение stone указано ниже.

{
  feature: 'earth',
  style: {
    color: 'black'
  }
}
*/

var stone = {
    feature: 'earth',
    style: {
        color: 'black'
    }
}

function deepFreeze(obj) {

    let propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function(name) {
        let prop = obj[name];
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });
    return Object.freeze(obj);
}

//   deepFreeze(stone);
//////////////////////////////////////////////////
//https://www.codewars.com/kata/59ea2a532a7accf2510000ce/train/javascript

// Can this object fly? Balloons in "Up" and in real life

/*
Сюжет знаменитого анимационного фильма Disney-Pixar «Вверх» основан на путешествии главного героя Карла Фредриксена в своем доме, оснащенном воздушными шарами.
Но может ли это произойти на самом деле? Какие предметы можно поднять с помощью гелиевых шаров? Сколько воздушных шаров вам нужно?
В этом ката вы создадите класс
Journey(object, crew, balloons)
так что любой может создавать такие объекты, как
var gravityFalls = new Journey(house, 2, 20622)
что означает начать новое путешествие в Гравити Фолз в доме с двумя членами экипажа (Карл и Рассел).
Но возможно ли это путешествие? Будет ли дом парить? Достаточно ли иметь 20622 гелиевых шара (количество, которое использовали аниматоры Pixar в сцене взлета)?
В вашем классе Journey должен быть публичный метод isPossible() который возвращает true или false на основе следующих правил:
1). Каждый объект, переданный в Journey, будет иметь свойство веса, например
var house = {"weight": 45000};
(в этом ката мы будем использовать метрическую систему, 45 000 кг это примерно 100 000 фунтов).
2). Каждый член экипажа весит 80 кг.
3). Мы используем обычные воздушные шары, наполненные гелием. Каждый шар поднимает 4,8 грамма + собственный вес.
Сможете ли вы поднять крошечную тележку весом 95 кг (~ 200 фунтов) с 50 воздушными шарами, как в одной из начальных сцен фильма?
Может ли один воздушный шар действительно нести сообщение на одном листе бумаги размером с письмо, отправленном Карлом своей умирающей жене Элли в другой сцене?
Может ли быть правдой история, которую я слышал о человеке, летящем в своем шезлонге, оснащенном 1000 воздушными шарами?
Ваше мастерство программирования даст ответы на эти и многие другие важные вопросы в тестах. Да начнется путешествие!
 */
/*
В вашем классе Journey должен быть публичный метод isPossible(), который возвращает true или false
*/

var letterToEllie = { 'weight': 0.004536 };
var house = { 'weight': 45000 };
var pushCart = { 'weight': 95 };
var lawnChair = { 'weight': 5 };

// 1 ballon can push up 4,8grams (0.0048kg) + its own weght. 
// 1 crew weighs 80kg 


function Journey(name, crew, balloons) {
    // let the journey begin

    this.name = name;
    this.weight = name['weight'];
    this.POWER_UP = 0.0048;
    this.MEMBER_WEIGHT = 80;
    this.crew = crew;
    this.balloons = balloons;



    this.crewWeight = function() {
        return this.crew * this.MEMBER_WEIGHT;
    };

    this.sumWeight = function() {
        return this.crewWeight() + this.weight;
    };


    this.summBaloons = function() {
        return this.balloons * this.POWER_UP;
    };


    this.isPossible = function() {
        return this.summBaloons() >= this.sumWeight() ? true : false;
    };
}
//////////////////////////////////////////////////
//https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript
//Extract Nested Object Reference
/*
Вам дан сложный объект, который имеет множество глубоко вложенных переменных. Вы не хотите идти по обычному маршруту if obj.property == null. Создайте метод-прототип, который с учетом вложенного пути либо возвращает значение, либо undefined.

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

let str1 = 'person.name';
let str2 = 'person.history.bio';
let str3 = 'person.history.homeStreet';
let str4 = 'person.animal.pet.needNoseAntEater';

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

function checkingKey(obj, str) {
    let arr = str.split('.');
    let arrKey = [];
    let flag = null;
    let result = null;

    function deepDive(obj) {
        for (let key in obj) {
            arrKey.push(key);
            if (typeof obj[key] === 'object') {
                deepDive(obj[key])
            };
        };
    };
    deepDive(obj);

    for (let j = 0; j < arr.length; j++) {
        let marck = arrKey.includes(arr[j]);
        if (marck === false) {
            flag = undefined;
            console.log(flag);
        };
    };

    if (flag === null) {
        result = arr.reduce((previous, current) => previous[current], obj);

    };


    return result !== null ? console.log(result) : console.log(flag);

};
// checkingKey(obj, str3);

Object.prototype.hash = function(string) {
    let arr = string.split('.');
    let arrKey = [];
    let flag = null;
    let result = null;
    let obj = this;

    function deepDive(obj) {
        for (let key in obj) {
            if (key !== 'hash') {
                arrKey.push(key);
                if (typeof obj[key] === 'object') {
                    deepDive(obj[key])
                };
            };

        };
    };
    deepDive(obj);

    for (let j = 0; j < arr.length; j++) {
        let marck = arrKey.includes(arr[j]);
        if (marck === false) {
            flag = undefined;
        };
    };

    if (flag === null) {
        result = arr.reduce((previous, current) => previous[current], obj);

    };


    return result !== null ? result : flag;

};

obj.hash(str4);
///////////////////////////////////////////////////////////////////////
//https://www.codewars.com/kata/54fe05c4762e2e3047000add
//Object Oriented Piracy

/* Эй, дружище! Вы лидер небольшой пиратской команды. И у вас есть план. С помощью ООП вы хотите сделать довольно эффективную систему для идентификации кораблей с тяжелой добычей на борту.

К сожалению для вас, в наши дни люди много весят, так как же узнать, что корабль полон золота, а не людей? Вы начинаете с написания универсального класса Ship:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Каждый раз, когда ваши шпионы видят, что новый корабль входит в док, они создают новый объект корабля на основе своих наблюдений:
draft -оценка веса корабля на основе того, насколько низко он находится в воде
crew - количество членов экипажа на борту

var titanic = new Ship(15, 10);

Учитывая, что средний член экипажа на борту добавляет к осадке 1,5 единицы, корабль, имеющий осадку более 20 без экипажа, считается достойным лута. На любом корабле такого веса должно быть много добычи! 
Добавьте метод - isWorthIt
чтобы решить, достоин ли корабль грабить. 
Например: titanic.isWorthIt() // return false

*/

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
}

//YOUR CODE HERE...
// Object.prototype.isWorthIt = function() {
//     let allWeight = this.draft - (this.crew * 1.5);
//     return allWeight > 20 ? true : false;
// }

//====================================== 14.05.22
https: //www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

    // Training JS #13: Number object and its properties
    /*
    Число — это базовый тип данных в javascript. javascript также поддерживает числовые объекты. Объект является исходным значением объекта пакета. При необходимости JavaScript автоматически преобразует исходные данные в объекты. Вы можете явно создать объект Number с помощью конструктора Number(). Хотя делать это необязательно.

    var num=new Number(value);

    Значение параметра — это значение создаваемого объекта Number или значение, которое необходимо преобразовать в числовое значение.

    Конструктор Number() можно использовать без оператора new и непосредственно как функцию преобразования. Таким образом, при вызове Number он преобразуется в число, а затем возвращает преобразованное значение (или NaN).

    var num=Number(value);

    Объект Number имеет два общих свойства объекта: конструктор и прототип. все объекты в JS имеют эти два свойства. это два очень важных атрибута. из-за их важности и сложности мы изучим их в будущем.

    В дополнение к двум указанным выше, объекты Number имеют пять атрибутов (или называемых константами):

    1. MAX_VALUE: максимальное число, которое может быть выражено в JS. Использование:Число.MAX_VALUE. Его приблизительное значение равно 1,7976931348623157e+308.

    2.MIN_VALUE: минимальное число, которое может быть выражено в JS (близко к 0, но не отрицательно). Использование:Число.MIN_VALUE. Его приблизительное значение 5e-324

    3.NaN: нечисловое значение. Сокращения от «Не число». Если некоторые арифметические операции (например, извлечение квадратного корня из отрицательного числа) или результат метода не являются числами, возвращайте NaN.Его можно упростить и заменить на NaN.

    Обратите внимание: результаты сравнения NaN с другими значениями всегда не равны (в том числе и с собственными). Следовательно, нельзя сравнивать с Number.NaN, чтобы определить, что значение не является числом, но можно только вызвать isNaN() для сравнения

    4. NEGATIVE_INFINITY: значение представляет отрицательную бесконечность.Когда число генерируется в арифметической операции или функции и меньше, чем -Number.MAX_VALUE возвращает это значение. Его можно упростить и заменить на -Infinity.

    5.POSITIVE_INFINITY: значение представляет положительную бесконечность.Когда число генерируется в арифметической операции или функции, и оно больше чем Number.MAX_VALUE возвращает это значение. Его можно упростить и заменить на Infinity.

    Task

    Создайте функцию whatNumberIsIt. функция принимает 1 параметр: n. это число.

    Если n является одной из пяти указанных выше констант, верните одну из следующих строк:

    "Input number is Number.MAX_VALUE"
    "Input number is Number.MIN_VALUE"
    "Input number is Number.NaN"
    "Input number is Number.NEGATIVE_INFINITY"
    "Input number is Number.POSITIVE_INFINITY"

    Другие значения должны возвращать «Input number is xxx». ххх означает этот номер.

    Пример:
    whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"

    whatNumberIsIt(100) should return "Input number is 100"

    Вам нужно подумать о том, как правильно и эффективно судить об этом и не забывать об isNaN().
    */

    function whatNumberIsIt(n) {
        let partStr = '';
        if (Number.MAX_VALUE) {
            partStr = 'Number.MAX_VALUE';
        }
        if (Number.MIN_VALUE) {
            partStr = 'Number.MAX_VALUE';
        }
        if (Number.isNaN(n)) {
            partStr = 'Number.NaN';
        }
        if(Number.isFinite(n)) {
            partStr = 'Number.NaN';
        }
        return console.log(partStr);
    }

// whatNumberIsIt(1.7976931348623157e+308);

console.log(isFinite(2));