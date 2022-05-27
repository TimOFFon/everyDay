/** 
 * Discord/задания
__________________________________________________________

[Конструктор заказа. Основы. learnjs 1.1..1.4]
-----------------------------------------------------

1. Написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы
addItem(item, count) - добавить итем в чек (+ имя +цена)
removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

2. Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке

3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов */



function NewOrder() {

    this.check = {};
    //===========================================================
    //                      this.addItem
    //===========================================================
    this.addItem = function(item, count) {
        if ('lock' in this.check === false) {
            /*добавить итем в чек (item and count) */
            let postFix = Object.keys(this.check).length;
            return this.check[item.name + postFix] = {
                name: item.name,
                cost: item.cost,
                count: count,
            };
        } else {
            return console.log('Заказ заблокирован!');
        }; //<---lock

    }; //<--- add
    //===========================================================
    //                      this.removeItem
    //===========================================================
    this.removeItem = function(item, count) {
        if ('lock' in this.check === false) {
            /**
             * removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
             */
            let splitOrders = {};


            function separatorCheck(objRoot, objTarget) {
                /**Сепаратор расклеивает товары поштучно, после того как их склеил метод для визуализации */

                for (const key in objRoot) {

                    function writerKeys() {
                        let postFix = Object.keys(objTarget).length;
                        return objTarget[objRoot[key]['name'] + postFix] = {
                            name: objRoot[key]['name'],
                            cost: objRoot[key]['cost'],
                            count: 1
                        };
                    };

                    if (objRoot[key]['count'] > 1) {

                        for (let i = objRoot[key]['count']; i > 0; --i) {
                            writerKeys();
                        };
                    } else {
                        writerKeys();
                    };
                }; //<---forin

                return splitOrders;
            }; //<--separ

            function removerGoods(item, pattern, pieces) {
                /**removeItem(item, count) - убрать из чека count итемов */
                let marck = pieces;
                /**марк - вспомогательный аккумулятор для итерации удаления */
                for (const key in pattern) {

                    if (pattern[key]['name'] === item['name'] && !pieces) {
                        delete pattern[key];
                    } else if (pattern[key]['name'] === item['name'] && pieces && marck) {
                        --marck;
                        delete pattern[key];
                    };
                };

                /**(если не указано сколько - убрать все) */

                return pattern;
            };

            separatorCheck(this.check, splitOrders);
            removerGoods(item, splitOrders, count);
            return this.check = splitOrders;

        } else {
            return console.log('Заказ заблокирован!');
        }

    }; //<--remove
    //===========================================================
    //                       this.getCheck
    //===========================================================
    this.getCheck = function() {
        if ('lock' in this.check === false) {
            /* получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный */

            let sameGoods = {};
            let checkAmount = null;
            let quantityNames = null;
            let print = null;


            function scanBaseOrders(objRoot, same) {
                /**Сканбэйс - записывает новый объект "склееных" товаров, из корневого  объекта созданного addItem (т.е, основной объект хранения заказа) */
                for (const key in objRoot) {
                    if (`${objRoot[key].name}` in same === false) {
                        same[objRoot[key].name] = {
                            name: objRoot[key].name,
                            cost: objRoot[key].cost,
                            count: objRoot[key].count,
                        };
                    } else {
                        same[objRoot[key].name].count += objRoot[key].count;
                    };
                };

                for (const key in same) {
                    /**Добавляем новое свойство к товарам в объекте "склееных" товаров, их ст-ть "склеенности"  */
                    same[key]['total-cost'] = same[key]['cost'] * same[key]['count'];
                };
                return same;
            };

            function sumAmount(same, amount) {
                /** Общая сумма заказа за все товары*/
                for (const key in same) {
                    amount += same[key]['total-cost'];
                }
                return amount;
            };

            function sumQuantity(same) {
                /**Общее кол. видов */
                return Object.keys(same).length;
            }

            function printCheck(same, amount, quntity) {
                /**Формируем текст */
                let fullStr = '';

                let firstPartStr = `* Заказ состоит из ${quntity} позиций:
*------------------------------
`;
                let midlePartsStr = '';

                let endPartsStr = `* Общая сумма заказа: ${amount} руб`;

                fullStr += firstPartStr;

                for (const key in same) {

                    midlePartsStr += `* ${same[key]['name']} по цене ${same[key]['cost']} руб за 1шт
* Количество ${same[key]['name']}: ${same[key]['count']}шт,
* На сумму: ${same[key]['total-cost']} руб.
*------------------------------
`;
                }
                fullStr += midlePartsStr;
                fullStr += endPartsStr;

                /**
                 * Заказ состоит из xxx позиций: 
                 * --------------------------------
                 * имя-ххххх по цене-хххх за шт. 
                 * Колл имя-ххххх: колл-хххх,
                 * На сумму тотал-хххх.
                 * --------------------------------------------
                 * Общая сумма заказа: ххх
                 */
                return fullStr;
            }

            scanBaseOrders(this.check, sameGoods);

            checkAmount = sumAmount(sameGoods, checkAmount);

            quantityNames = sumQuantity(sameGoods);

            print = printCheck(sameGoods, checkAmount, quantityNames);

            alert(print);

        } else {
            return console.log('Заказ заблокирован!');
        };
    }; //<---getCheck
    //===========================================================
    //                    this.lockOrder
    //===========================================================
    this.lockOrder = function() {
        let keyLock = 'lock';
        /* после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча*/
        this.check[keyLock] = keyLock;
        return this.check;
    };
    //===========================================================
    //                   this.unlockOrder
    //===========================================================
    this.unlockOrder = function() {
        /* убрать блокировку заказа - снова можно добавлять итемы*/
        delete this.check['lock'];
        return this.check;
    };
};

//===========================================================
//                          End
//===========================================================

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



// order.addItem(item, 1);
// order.getCheck();
// order.addItem(item2, 2);
// order.addItem(item, 1);
// order.addItem(item, 1);
// order.addItem(item3, 1);
// order.addItem(item3, 1);
// order.addItem(item3, 1);
// order.getCheck();
// order.removeItem(item);
// order.getCheck();

// order.lockOrder();
// order.unlockOrder();