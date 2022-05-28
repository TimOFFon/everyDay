//===================================================
// ===================  Paity =======================
//===================================================

const data = [1, 2, 3, 4, 5, 6];

function getNumbersByParity(arr, str) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(str === 'even' && element % 2 === 0) {
            newArr.push(element);
        } else if(str === 'odd' && element % 2 !== 0) {
            newArr.push(element);
        }
    };
    return newArr;
};

// let evenResult = getNumbersByParity(data, 'even');
// let oddResult = getNumbersByParity(data, 'odd');

// console.log(evenResult); //[2, 4, 6]
// console.log(oddResult); // [1, 3, 5]

//===================================================
// ===================  Has Arrays ==================
//===================================================

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
const data2 = [];

function hasArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(Array.isArray(element)) {
            return true;
        }
    }
    return false;
};

// console.log(hasArrays(data1)); // true
// console.log(hasArrays(data2)); // false

//===================================================
// ===================  moveToStart ==================
//===================================================
let arrEx = [1, 2, 3, 4, 5,6];
function moveToStart(arr, n) {
    let newArr = [];
    if(n >= arr.length) {
        arr.forEach(function(item) {
            newArr.push(item);
        });
        return newArr;
    };
    let part1 =  arr.slice(-n); 
    let part2 = arr.slice(0, -n);
    newArr = part1.concat(part2);

    return newArr;
};

let result3 = moveToStart(arrEx, 3);
let result4 = moveToStart(arrEx, 7);

// console.log(result3);
// console.log(result4);

//===================================================
// ============== getStringCount ==================
//===================================================
const obj4 = {
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
};



const arr4 = ['1', '2', ['3'], '4'];



function getStringCount(value) {

    let count = 0;
    
        if(Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                if(typeof element === 'string') {
                    count++;
                };
                if(Array.isArray(element)) {
                   count += getStringCount(element);
                };
            };
        };
    
    
        if(toString.call(value) === '[object Object]') {
        for(let key in value) {
            if(typeof value[key] === 'string') {
                count++;
            };
            if(Array.isArray(value[key])) {
                count += getStringCount(value[key]);
            };
        };
    };



    return count;
};



// let result5 = getStringCount(obj4);
// let result6 = getStringCount(arr4);
// console.log(result5);
// console.log(result6);


//===================================================
// ============== sequenceSum ==================
//===================================================

function sequenceSum(begin, end) {
    if(begin > end) {
        return NaN;
    };
    if (begin === end) {
        return begin || end;
    }
    return begin + sequenceSum(++begin, end);
};

let sequenResult1 = sequenceSum(1, 5); // 15
let sequenResult2 = sequenceSum(4, 10); // 49
let sequenResult3 = sequenceSum(-3, 2); // -3

let sequenResult4 = sequenceSum(7, 2); // NaN
let sequenResult5 = sequenceSum(0, 0); // 0
let sequenResult6 = sequenceSum(6, 6); // 6

// console.log(sequenResult1);
// console.log(sequenResult2);
// console.log(sequenResult3);
// console.log(sequenResult4);
// console.log(sequenResult5);
// console.log(sequenResult6);
