// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
/**
 * Кодирование в функции isolateIt. функция принимает 1 параметр arr, 
 * это массив строк. Ваша задача поставить символ "|" в середину каждого 
 * элемента.

Если длина строки является четным числом, используйте метод вставки. 
например: "abcd" должно стать "ab|cd". "|" должен быть вставлен между ab и cd.

Если длина строки является нечетным числом, используйте метод замены. 
например: "abcde" должно стать "ab|de". Символ c будет заменен на |.

Исходный массив менять не надо, нужно вернуть новый массив
(если вы используете метод map, то об этом можно не беспокоиться).
 */

let arrStr1 = ["abcd","efgh"]; // ["ab|cd","ef|gh"]
let arrStr2 = ["abcde","fghij"]; // ["ab|de","fg|ij"]
let arrStr3 = ["1234","56789"]; // ["12|34","56|89"]

function isolateIt(arr){
    return arr.map(elem => {
        if(elem.length % 2 === 0) {
            let midI = (elem.length / 2);
            let frstPart = elem.slice(0, midI);
            let secondPart = elem.slice(-midI);
            return elem = frstPart + '|' + secondPart;
        } else {
            let midI = ((elem.length - 1) / 2);
        
            // let letterInStr = elem[midI];
            let regexp = /./y;

            console.log(midI);
            // console.log(letterInStr);
            console.log(elem.length);

            regexp.lastIndex = midI;
            // console.log(regexp.lastIndex);
            console.log(regexp.exec(elem));

            return elem = elem.replace(regexp.exec(elem), '|');
        }});
};




// console.log(isolateIt(arrStr1));
// console.log(isolateIt(arrStr2));
// console.log(isolateIt(arrStr3));

let problemArr = ["IHJR7GsMHqDvlVMsb","O!7$jQ._Uog_","wNqK","3pbbDDcpxS*","f3q"];

let problemElArr = ["IHJR7GsMHqDvlVMsb"];

console.log(isolateIt(problemElArr));

/**['DLU|!tG', 'q3|qb', '4r6TDY|bBC%&s', '$2X|2CX', '0|p', '!SUl|$oDr', 'sv h*|sjG=y', '-H.jr|uJ|jz', 'l|R', 'NOhZ|7T6A', '|EQjZ-N', '0Of 2DJ|E!bkg+e'] */

/* Expected: 
'[\'DLU|!tG\', \'q3|qb\', \'4r6TDY|bBC%&s\', \'$2X|2CX\', \'0|p\', \'!SUl|$oDr\', \'sv h*|sjG=y\', \'-H.jr|uJ|jz\', \'l|R\', \'NOhZ|7T6A\', \'jEQ|Z-N\', \'0Of 2DJ|E!bkg+e\']', 
instead got: 
'[\'DLU|!tG\', \'q3|qb\', \'4r6TDY|bBC%&s\', \'$2X|2CX\', \'0|p\', \'!SUl|$oDr\', \'sv h*|sjG=y\', \'-H.jr|uJ|jz\', \'l|R\', \'NOhZ|7T6A\', \'|EQjZ-N\', \'0Of 2DJ|E!bkg+e\']' 
*/
