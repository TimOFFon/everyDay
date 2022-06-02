/**  pop()     shift()     push()     unshift()
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


let arrEx2 = [[1,2,3],[4,5,6],[7,8,9]];
infiniteLoop(arrEx2, "right", 1); 






