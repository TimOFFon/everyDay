//========================================================================
//===================   Опциональная цепочка  '?.'  ====================
//=======================================================================

let user = {};

// console.log(user.address.street); // TypeError

/**Поскольку user.address имеет значение undefined, попытка получить user.address.street завершается ошибкой. 
 * 
 * Во многих практических случаях мы бы предпочли получить здесь undefined вместо ошибки
 */

//document.querySelector('.elem') равен null, если элемента нет


//--------------------------------------------------------------------
// let html = document.querySelector('.elem').innerHTML; // ошибка, если он равен null
//--------------------------------------------------------------------

/**в некоторых случаях, когда отсутствие элемента является нормальным, мы хотели бы избежать ошибки и просто принять html = null в качестве результата */

//==================================================================
// ------------------- Как избежать ошибки -----------------------
//==================================================================

// Вариант1-------------------------------------------------------

console.log(user.address ? user.address.street : undefined); // undefined

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
console.log(html); // nul

console.log(user.address ? user.address.street ? user.address.street.name : null : null); //null


//Вариант2-------------------------------------------------------------

console.log(user.address && user.address.street && user.address.street.name); // undefined


// Вариант3-----------------------------------------------------------

console.log(user?.address?.street); //undefined

let html2 = document.querySelector('.elem')?.innerHTML; // будет undefined, если элемента нет

let user2 = null;



// console.log(user2.address); // typeError
console.log(user2?.address); // undefined

console.log(user2?.address.street); // undefined


//======================================================================
//===================  Сокращённое вычисление  ==========================
//=======================================================================

/**?. немедленно останавливает вычисление, если левая часть не существует */

let user3 = null;
let x = 0;

user3?.sayHi(x++); // не выполнится (user3 = null)
console.log(x); // 0

/**Опциональная цепочка ?. — это не оператор, а специальная синтаксическая конструкция */

let userAdmin = {
    admin() {
        console.log('Я админ');
    }
};

let userGuest = {};

userAdmin.admin?.(); // 'Я админ'
userGuest.admin?.(); // ничего

/**Синтаксис ?.[] также работает, если мы хотим использовать скобки [] для доступа к свойствам вместо точки ..  */

let key = 'firstName';

let user4 = {
    firstName: 'John'
};

let user5 = null;

console.log(user4?.[key]); // 'John'
console.log(user5?.[key]); // undefined


/**Также мы можем использовать ?. с delete: */

let objWork = {
    deepObj1: {
        name: 'name1',
        age: 30,
        salary: 100
    },
    deepObj2: {
        name: 'name1',
        age: 30,
        salary: 200
    },
    deepObj3: {
        name: 'name1',
        age: 30,
        salary: 300
    },
};

function iteratorDeepObj(obj) {
    for (const key in obj) {
        delete obj[key]?.['salary']; //<---- если есть, удаляем
        console.log(obj[key]);
    }
};

iteratorDeepObj(objWork);

//======================================================================
//===================  ИТОГО ==========================
//=======================================================================
/**
1). obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.

2). obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.

3).obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.

*/
