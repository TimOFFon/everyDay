//================================================
//=======  LTSTING OBJ to PRIMITIVE ==============
//================================================

let obj1 = {};
let obj2 = {};

// console.log(obj1 + obj2); // [object Object][object Object]
// console.log(obj1 - obj2); // NaN
// console.log(+obj1 + +obj2); // NaN
// console.log(Number(obj1)); // NaN
// console.log(toString(obj1)); // [object Undefined]
// console.log(obj1 > obj2); // false
// console.log(obj1 == obj2); // false
// console.log(obj1 + 1); // [object Object]1

let obj3 = {
    valueOf() {
        return 1;
    }
};

let obj4 = {
    [Symbol.toPrimitive](hint) {
        console.log(hint);
    },
    valueOf() {
        return 1;
    },
    toString() {
        return 'строка';
    }
};
// console.log(obj3 + 1); // 2
// console.log(obj4 + 1); // default // NaN

let obj5 = {

    [Symbol.toPrimitive](hint) {
        console.log(hint);
        if(hint === 'default' ||
            hint === 'string'){
            return this.toString();
        } else {
        return this.valueOf();
        }
    },
    valueOf() {
        return 1;
    },

};

// console.log(obj5 + 1); // default // [object Object]1
// console.log(obj5 - 1); // number // 0
// console.log(obj5 / 1); // number // 1
// console.log(obj5 * 1); // number // 1
// console.log(obj5 < 1); // number // false
// console.log(obj5 == 1); // default // false
// console.log(+obj5); // number // 1
// console.log(obj5 + obj5); // default // [object Object][object Object]

let obj6 = {

    [Symbol.toPrimitive](hint) {
        console.log(hint);

    },


};

// console.log(obj6 + 1); // default // NaN
// console.log(obj6 < 1); // number // false
// console.log(obj6 < 1); // number // false
// console.log(obj6.toString()); // [object Object]
// console.log(Number(obj6)); // number // NuN
// console.log(obj6 + ''); // default // undefined

let obj7 = {
    [Symbol.toPrimitive](hint) {
        console.log(hint);
        if(hint === 'string'){
            return this.toString;
        } else {
            return this.valueOf();
        }
    },
    valueOf() {
        return 1;
    },
    toString() {
        return 'строка';
    },

};

// console.log(+obj7); // number // 1
// console.log(obj7 + ''); // default // 1
// console.log(obj7 + 1); // default // 2
// console.log(obj7 - 1); // number // 0
// console.log(obj7 + '2'); // default // 12
// console.log(obj7 + '2'); // default // 12
console.log(obj7.toString()); // строка