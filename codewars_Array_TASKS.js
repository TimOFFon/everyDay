/**
 * https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
 * 
 * Counting sheep...
 * 
 * Consider an array/list of sheep where some sheep may be missing
 * from their place. We need a function that counts the number of
 * sheep present in the array (true means present).
 */
const arr = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];


function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(element => {
        if(element === true && element !== null && element !== undefined) {
            ++count;
        }
    });
    console.log(count);
};

// countSheeps(arr);

/**
 * https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
 * 
 * Sum of Odd Cubed Numbers
 * 
 * Find the sum of the odd numbers within an array, after cubing
 * the initial integers. The function should return undefined if
 * any of the values aren't numbers.
 */

let arr1 = [1, 2, 3, 4];
let arr2 = [-3,-2,2,3];
let arr3 = ["a",12,9,"z",42];

function cubeOdd(arr) {
    let sum = 0;
    let flag = false;
    arr.forEach(element => {
        if(!Number.isInteger(element)) {
            flag = true;
        } 
        if(Math.pow(element, 3) % 2 !== 0 ) {
            sum += Math.pow(element, 3);
        };
    });
    return console.log(flag === true ? undefined : sum); 
};

    // cubeOdd(arr3);

/**
 * https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
 * 
 * Lost number in number sequence
 * 
 * An ordered sequence of numbers from 1 to N is given. One number
 *  might have deleted from it, then the remaining numbers were 
 *  mixed. Find the number that was deleted.
 * 
 * Example:
 * 
 * The starting array sequence is [1,2,3,4,5,6,7,8,9]
 * The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
 * Your function should return the int 5.
 * If no number was deleted from the starting array, your function  * should return the int 0.
 * 
 * Note: N may be 1 or less (in the latter case, the first array 
 *   will be []).
 */
let arr1_1 = [1,2,3,4,5];
let arrMix1 = [3,4,1,5];

let arr2_2 = [1,2,3,4,5,6,7,8,9];
let arrMix2 = [5,7,6,9,4,8,1,2,3];

function findDeletedNumber(arr, mixArr) {
    let result = 0;
    arr.forEach(element => {
        if(!mixArr.includes(element)) {
            result = element;
        }
    });
    return console.log(result);
};

findDeletedNumber(arr1_1, arrMix1);
findDeletedNumber(arr2_2, arrMix2);
