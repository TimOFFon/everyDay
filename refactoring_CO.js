/** 
 * Discord/задания
__________________________________________________________

[Конструктор заказа. Основы. learnjs 1.1..1.4]
-----------------------------------------------------

1. Написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы

addItem(item, count) - добавить итем в чек (+имя +цена +кол)

removeItem(item, count) - убрать из чека count итемов 
(если не указано сколько - убрать все). Нельзя убрать больше 
чем было в чеке

getCheck() - получить информацию сколько каких итемов в чеке, 
общую цену, опционаольно цену за каждую позицию 
(за 3 пивка - 300р). Формат произвольный, чтобы был читабельный

lockOrder() - после вызова метода функции addItem/removeItem не 
должны делать что-либо. Можно как-то сообщать об ошибке, 
можно просто молча.

unlockOrder() - убрать блокировку заказа - снова можно добавлять 
итемы

2. Формат item - объект с 
        1. названием итема 
        2. ценой за штуку. 2 итема с одинаковым именем 
        считаем одной позицией в чеке

3. использовать отладку (debugger) при решении в хроме. 
Если получится без отладки - самому допустить ошибку и 
найти ее при отладке через интерфейс девтулзов */


function NewOrder() {
    let locked = false;
//================================================================
//=========================    addItem     =====================
//================================================================
/* addItem(item, count) - добавить итем в чек (+имя +цена +кол) */
    this.addItem = function(item, count) {
        if(this.locked) {
            this.lockOrder();
        };

        if (!this.check) {
            this.check = {};
        };

        if (item.name in this.check && !this.locked) {
            return this.check[item.name].count += count;
        } else if(!this.locked) {
            return this.check[item.name] = {
                name: item.name,
                cost: item.cost,
                count: count,
            }  
        };
    };
//================================================================
//=======================    removeItem     =====================
//================================================================
/*
removeItem(item, count) - убрать из чека count итемов 
(если не указано сколько - убрать все). Нельзя убрать больше 
чем было в чеке
*/
    this.removeItem = function(item, count) {
        if(this.locked) {
            this.lockOrder();
        };

        if(item.name in this.check&& !this.locked) {
            if(count === undefined ||
                count >= this.check[item.name].count) {
                delete this.check[item.name];
            } else {
                this.check[item.name].count -= count;
            };
        };

    };
//================================================================
//=========================    getCheck    =======================
//================================================================
/**
 * getCheck() - получить информацию сколько каких итемов в чеке, 
 * общую цену, опционаольно цену за каждую позицию 
 * (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
 */
    this.getCheck = function() {

        if(this.locked) {
            this.lockOrder();
        };
        
        if(this.check && !this.locked) {
            let sumCountsItem = Object.keys(this.check).length;
            let itemName = null; 
            let costItem = null; 
            let countItem = null; 
            let totalCostItem = null; 
            let totalCostOrder = null;
            let fullStr = '';

            let firrstPartString = `*==============================================*\n Заказ состоит из ${sumCountsItem} позиций: \n`;
            fullStr += firrstPartString;

            for(let key in this.check) {
                itemName = this.check[key].name;
                costItem = this.check[key].cost;
                countItem = this.check[key].count;
                totalCostItem = costItem * countItem;
                totalCostOrder += totalCostItem;

                let middlePartsString = `*==============================================*\n ${itemName} по цене: ${costItem} руб. за 1шт.\n Количество ${itemName}: ${countItem}шт. \n На сумму: ${totalCostItem} руб.\n`;
                fullStr += middlePartsString;
            };

            let lastPartString = `*==============================================*\n Общая сумма заказа: ${totalCostOrder}`;

            fullStr += lastPartString; 

            return console.log(fullStr);
        };  
    };
//================================================================
//=========================    lockOrder    =====================
//================================================================
/**
 * lockOrder() - после вызова метода функции addItem/removeItem не 
должны делать что-либо. Можно как-то сообщать об ошибке, 
можно просто молча.
 */
    this.lockOrder = function() {
        if(this.check && !this.locked) {
            this.locked = true;
        };
        function showMessageBlock() {
            let messageStr = `Заказ заблокирован!\n Снимите блокировку!`;
            return console.log(messageStr);
        };
        return showMessageBlock();
    };

//================================================================
//=========================    unlockOrder    =====================
//================================================================
    this.unloсkOrder = function() {
        if(this.check && this.locked) {
            showMessageUnBlock();
            return  this.locked = false;
        };
        function showMessageUnBlock() {
            let messageStr = `Заказ разаблокирован!\n Операции доступны`;
            return console.log(messageStr);
        };
        
    };
};


let item = {
    name: 'Tesla Model 3 ',
    cost: 5000000,
};
let item2 = {
    name: 'Tesla Model X ',
    cost: 6000000,
};
let item3 = {
    name: 'Tesla Model S ',
    cost: 7000000,
};

let order = new NewOrder();
order.addItem(item, 2);
order.addItem(item2, 2);
order.addItem(item3, 2);
order.removeItem(item, 1);
console.log(order);
order.lockOrder();
order.getCheck();
// order.getCheck();
order.unloсkOrder();
order.lockOrder();
order.getCheck();


/**  MAX'S REWUE
 * 
 * 40 убрать, ТК везде юзаем из this. 
 * Понять разницу this.locked и let locked
 * 
 * 46 зачем ловить если уже залоченг? 
 * Если залочен, return и все
 * 
 * 54 убрать проверку на this.locked, 
 * ТК если ,locked делаем return выше
 * 
 * LockOrder не должен юзаться только для вывода сообщения, 
 * если нужно выводить сообщение добавить метод reportIsLocked
 * 
 * Ну то есть функции на 143 158 вынести в методы
 * 
 * Остальное на что не указал явно но где тоже самое сделать по аналогии
 * 
 * Продумать требования к порядку вывода в getCheck, как должен считаться 
 * порядок. 
 * 
 * Описать требования здесь, потом уже перейти к коду. 
 * Проверить, выполняются ли требования уже, если нет доработать код. 
 * 
 * Проверить кейс с удалением, как работает 
 * в нем, если надо доработать требования, потом код 
 * 
 * Если с требованием сложности, сходить в магазин купить несколько товаров, 
 * посмотреть в каком порядке их пробьют на кассе и как они располагаются в 
 * чеке, понять закономерность */