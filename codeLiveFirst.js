/** ЗАДАЧА c CODELIVE
 * https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
 * // *Ваша задача — написать функцию, которая увеличивает строку, чтобы создать новую строку.

// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.
// Примеры:

"foo" => "foo1"
"foobar001" => "foobar002"
"foobar99" => "foobar100"
"foobar099" => "foobar100"
"" => "1"
*/
let str0 = "foo";
let str1 = "foobar23";
let str2 = "foo0042";
let str3 = "foo9";
let str4 = "foo099";


let str5 = "foobar000";
let str6 = "foobar99";
let str7 = "foobar099";
let str8 = "";
let str9 = "foobar00999";

function parseStrin(str) {
    let numOfCats = '';
    let check = isFinite(str.split("")[str.length - 1]);
    

    let partString = "";
    let partNumber = "";
    let result = "";
    let strZero = '';

    if (!check) {
        return (str += 1);
    } else {
    
        for (let i = 0; i < str.length; i++) {
            if (isFinite(str[i])) {
            numOfCats += str[i];
            };

        };
        
        partNumber = Number(numOfCats) + 1;
        
        if(partNumber.toString().length < numOfCats.length) {
            let count = numOfCats.length - partNumber.toString().length;
            for (count;  count>0; count--) {
                strZero += '0';
            }
        };
        
        partString = str.slice(0, (-numOfCats.length));
 
        partString = partString + strZero;
        result = partString + partNumber;
        return result;
    };
};


// console.log(parseStrin(str1));
console.log(parseStrin(str9));
// console.log(parseStrin(str6));
// console.log(parseStrin(str7));
// console.log(parseStrin(str8));


/**
 * Ivan's Version 
 * 
 * Через деление шестнадцетиричное изчесление
 */

function test(str) {
    let tmp = 0;
    let tmp2 = 0;
    let tmp3 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] - 0 > 0) tmp2 = 1;
        if (tmp2 == 0) {
            tmp3 = `${tmp3}${str[i]}`;
        } else if (!isNaN(str[i] - 0)) {
            tmp = tmp * 10 + (str[i] - 0);
        }
    }
    if (tmp == 0) {
        if (str[str.length - 1] == "0") {
            return `${str.slice(0, str.length - 1)}1`;
        }
        return `${str}1`;
    }
    tmp++;
    if (`${tmp}`.length != `${--tmp}`.length) {
        tmp++;
        if (tmp3[tmp3.length - 1] == "0") {
            return `${tmp3.slice(0, tmp3.length - 1)}${tmp}`;
        } else {
            return `${tmp3}${tmp}`;
        }

    } else {
        tmp++;
        return `${tmp3}${tmp}`;
    }
}
const strV = "foobar0099";
// console.log(test(strV));

/**
 * Katana's Version
 */

//  const increaseString = (str) => {
    //     const numberOfString = str.split('').find((char) => {
    //         return parseInt(char);
    //     });
    
    //     if (!numberOfString) {
    //       return str + 1;
    //     } else {
    //         const numbersFromString = str.split('').filter(char => {
    //           if (char === '0' || parseInt(char, 10)) {
    //             return char;
    //           }
    //           return false;
    //         })
    //         let acc = '';
    //         for (let i = 0; i < numbersFromString.length; i++) {
    //           if (numbersFromString[i] !== '0') {
    //             acc += numbersFromString[i];
    //           }
    //         }
    //         // time is up
    //     }
    // }
    
    // console.log(increaseString('foo0042'))
    
    
    
    function incrementString(string) {
        let valuesOfZero = [];
        let strOfString = "";
        let numberOfString = "";
        
        let result = "";
        let arr = string.split("").map((el) => {
        if (!Number(el) && el !== "0") {
            return strOfString += el;
        } else if (el === "0") {
        return 	valuesOfZero.push(el);
        } else {
            return numberOfString += el;
        }
    });
    
        let currentValues = numberOfString.length;
        valuesOfZero = valuesOfZero.join('');
        numberOfString = String(+numberOfString + 1);
        if (currentValues >= numberOfString.length) {
        result = `${ strOfString }${ valuesOfZero }${ numberOfString }`;
        } else {
        result = `${ strOfString }${ (valuesOfZero.slice(1)) }${ numberOfString }`;
        }
        return result;
    };