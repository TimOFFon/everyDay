/** ====== pop() === shift() == push() === unshift() ===========
 * https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
 * 
 * Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()
 * (3:00)
 */
let arr01 = [[1,2,3],[4,5,6],[7,8,9]];
let arr02 = [[1,2,3],[4,5,6],[7,8,9]];
let arr03 = [[1,2],[3,4,5,6],[7,8,9,10]];

let arrEx1 = [[3,1,2],[7,8,3,8,0],[8,4,9]];


// [[1,2,3],[4,5,6],[7,8,9]],"left",1 => [[2,3,4],[5,6,7],[8,9,1]]
// [[1,2,3],[4,5,6],[7,8,9]],"right",1 => [[9,1,2],[3,4,5],[6,7,8]]
// [[1,2],[3,4,5,6],[7,8,9,10]],"left",2 =>[[3,4],[5,6,7,8],[9,10,1,2]]


//[[3,1,2],[7,8,3,8,0],[8,4,9]]
// [[8, 0, 8], [4, 9, 3, 1, 2], [7, 8, 3]]

//A = [3,1,2].pop() - 0
//[7,8,3,8,0].unshift(A) -1
//B = [7,8,3,8,0].pop() - 1
//[8,4,9].unshift(B) -2
//C = [8,4,9].pop() - 2
//[3,1,2].unshift(C) - 0

//[[3,2,3,1],[3,5,8,4,5],[5,6,7,6,9,8,6]]
//[[5, 8, 4, 5], [5, 6, 7, 6, 9], [8, 6, 3, 2, 3, 1, 3]]

// A = [3,2,3,1].shift() - 1
// [5,6,7,6,9,8,6].push(A) - 3
// B = [5,6,7,6,9,8,6].shift() - 3
// [3,5,8,4,5].push(B) -2
// C = [3,5,8,4,5].shift() -2
// [3,2,3,1].push(C) - 1

// if (d === 'right') {
//     for( let i = 0; i < n; i++) {
//         let fromBackA = arr[0].pop(); // 1
//         arr[1].unshift(fromBackA); // 2
//         let fromBackB = arr[1].pop(); // 3
//         arr[2].unshift(fromBackB); // 4
//         let fromBackC = arr[2].pop(); // 5
//         arr[0].unshift(fromBackC); // 6
//         console.log(i);
//     };
// };

// if(d === 'left') {
//     for( let i = 0; i < n; i++) {
//         let fromBackA = arr[0].shift(); // 1
//         arr[2].push(fromBackA); // 2
//         let fromBackB = arr[2].shift(); // 3
//         arr[1].push(fromBackB); // 4
//         let fromBackC = arr[1].shift(); // 5
//         arr[0].push(fromBackC); // 6
//         console.log(i);
//     };
// };



function infiniteLoop(arr,d,n) {
    if (d === 'right') {
        for( let i = 0; i < n; i++) {
            for(let j = 0, k = 1; j < arr.length; j++ , ++k) {
                if(k === arr.length) {
                    k = 0;
                }
                let fromBackA = arr[j].pop(); // 1
                arr[k].unshift(fromBackA); // 2
            };
        };
    };
    if(d === 'left') {
        for( let i = 0; i < n; i++) {
            for(let j = 0, k = arr.length - 1; k >= 0; j = k,--k) {
                let fromBackA = arr[j].shift(); // 1
                arr[k].push(fromBackA); // 2
            };
        };
    };
    return console.log(arr);
};


// let arrEx2 = [[1,2,3],[4,5,6],[7,8,9]];
// infiniteLoop(arrEx2, "right", 1); 


/**   ======================== splice() ======================
 * https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
 * 
 * Training JS #24: methods of arrayObject---splice() and slice()
 * Note1: You should not modify the original array.
 * threeInOne( [1,2,3]) should return [6]
 * threeInOne( [1,2,3,4,5,6]) should return [6,15]
 * threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
 * threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
 */
let arr11 = [1,2,3];
let arr12 = [1,2,3,4,5,6];
let arr13 = [1,2,3,4,5,6,7,8,9];
let arr14 = [1,3,5,2,4,6,7,7,7];

function threeInOne(arr){

    let arrBufer = arr.slice();
    let arrSegment = [];
    let arrResult = [];

    function catsArray (arr, countsSegment) {
            return arr.splice(0,countsSegment);
    };

    for (let i = arr.length / 3; i > 0; i--) {
        arrSegment = catsArray(arrBufer, 3);
        arrResult.push(arrSegment.reduce((a, b) => a + b, 0));
    }
    return console.log(arrResult);
};

// threeInOne(arr11);
// threeInOne(arr12);
// threeInOne(arr13);
// threeInOne(arr14);


/**
 * https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
 * 
 * Training JS #22: Unlock new skills--Arrow function,spread operator and  
 *  deconstruction
 * 
 * Create a function shuffleIt. The function accepts two or more parameters.
 * The first parameter arr is an array of numbers, followed by an arbitrary
 * number of numeric arrays. Each numeric array contains two numbers, which
 * are indices for elements in arr (the numbers will always be within bounds).
 * For every such array, swap the elements. Try to use all your new skills:
 * arrow functions, the spread operator, destructuring, and rest parameters.
 * 
 * shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
 * shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
 * shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
 */
let arr31 = [1,2,3,4,5];

let arrInd31 = [1,2];
let arrInd32 = [3,4];
let arrInd33 = [2,3];

function shuffleIt(arr,...a) {
    //coding here...
    let workArr = arr.slice();
    let indexArr = a;
    let bufer = null;

    for(let i of indexArr) {
        let [index1, index2] = i;
        bufer = workArr[index1];
        workArr[index1] = workArr[index2];
        workArr[index2] = bufer;
    };

    console.log(workArr);
};

// shuffleIt(arr31, arrInd31, arrInd32, arrInd33);





/**
 * https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
 * 
 * Training JS #25: methods of arrayObject---reverse() and sort()
 * 
 * conditions1: according to the number of elements(in ascending order)
 *  for example:
 * sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
 * because [1,1,1,2,2,3] has one 3, two 2 and three 1
 * 
 * conditions2: If the same number of elements, according to the number
 *  values(in descending order) for example:
 * sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
 * because number of 3,2 and 1 both are three, then according to 3>2>1
 * 
 * Comprehensive two conditions should be like this:
 * sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
 */

let arr41 = [1,1,1,2,2,2,2,3]; // [3,2,2,1,1,1]
let arr42 = [1,1,1,2,2,2,3,3,3]; // [3,3,3,2,2,2,1,1,1]
let arr43 = [1,2,3,4,4,5,5,6,6]; //  [3,2,1,6,6,5,5,4,4]

function sortIt(arr) {
    let arrWork = arr.slice();
    function comparator(arrX) {
        let weight = 0;
        let indexTeleport = 0;
        let objWeights = {};
        arrX.reduce( (before, now) => {
            console.log(before);
            if(before === now) {
                weight += 1;
            } else {
                objWeights.before = weight;
                weight = 1;
            }
        }, 0);
        // for (let i = 0; i < arrX.length; i++) {
            
        //     console.log(indexTeleport);
            // let elementA = arrX[i];
            // let afterA = arrX[i + 1];

            // if (elementA !== afterA) {
            //     objWeights[elementA] = weight;
            //     weight = 1;
            // } 

            
        
            // for (let j = i + 1; j < arrX.length; j++) {
            //     let elementB = arrX[j];
            //     if(elementA === elementB) {
            //         weight += 1;
            //         indexTeleport += 1;
            //     }; 
                
            // };
        
        // }
        // console.log(objWeights);
        // console.log(weight);
        return objWeights;
    };
    
    let objWorck = comparator(arrWork);
    console.log(objWorck);
};

let problemArr1 = [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7];

console.log(sortIt(arr41)); // [3,2,2,1,1,1]
// console.log(sortIt(arr42)); // [3,3,3,2,2,2,1,1,1]
// console.log(sortIt(arr43)); // [3,2,1,6,6,5,5,4,4]
// console.log(sortIt(problemArr1)); // [3,2,1,6,6,5,5,4,4]


// function sortIt(arr){
//     let arrWork = arr.slice();
//     for (let i = 0; i < arr.length; i++) {
//             if(arr[i] === arr[i+1]) {
//                 arrWork[i] = arr[i] / 10;
//                 arrWork[i+1] = arr[i+1] / 10;
//             };   
//     };

//     // console.log(arrWork);

//     arrWork.sort((a,b) => {
//         if(a>b) return -1;
//     });

//     // console.log(arrWork);

//     let arrWork2 = arrWork.slice();

//     for (let i = 0; i < arrWork2.length; i++) {
//         if(Number.isInteger(arrWork2[i]) === false) {
//             arrWork2[i] = arrWork2[i] * 10;
//         };
//     };
//     return arrWork2;
// };