let str1 = "01010"; // the result should be 1:
//"01010"  -->  "  010"  -->  "    0"
let str2 = "110100"; // the result should be 2:
// "110100"  -->  "1  100"  -->  "1    0" */
let str3 = "10000011"; // expected 2 to equal 4
let str4 = "11111110111001011101111000110001011111111100011110010000111111001110000011010110101" // expected 41 to equal 37

function zeroAndOne(s) {
    //coding and coding..
    let outStr = s;
    for (let i = 0; i < s.length; i++) {
        if (outStr[i] !== outStr[i + 1] &&
            outStr[i] !== '' &&
            outStr[i + 1] !== '') {
            if (outStr[i] === '1') {
                outStr = outStr.replace(/10/, ' ');
            }
            if (outStr[i] === '0') {
                outStr = outStr.replace(/01/, ' ');
            }
        }
    }
    outStr = outStr.replace(/\s/g, '');
    return outStr.length;
}

// zeroAndOne(str4);
// console.log(str2.replace(/01/g, " "));
// console.log(str1);

//-------------------------------------------------------
const strM1 = "4556364607935616"; //--> "############5616"
const strM2 = "64607935616"; //-->      "#######5616"
const strM3 = "1"; //-->                "1"
const strM4 = ""; //-->                 ""
const strM5 = "Skippy"; //-->           "##ippy"

function maskify(cc) {
    let maskStr = cc;
    if (cc.length > 4) {
        for (let i = 0; i < maskStr.length - 4; i++) {
            maskStr = maskStr.replace(`${maskStr[i]}`, '#');
        }
    }
    return maskStr;
}

maskify(strM5);

//-------------------------------------------------------

//"S",  180  -->  "N"
//"SE", -45  -->  "E"
//"W",  495  -->  "NE"
//("W", -630) -->  "N"

function direction(facing, turn) {
    const compas = {
        'N': 0,
        'NE': 45,
        'E': 90,
        'SE': 135,
        'S': 180,
        'SW': 225,
        'W': 270,
        'NW': 315
    }
    let startDegree = compas[facing];
    let mooveArrow = startDegree + turn;
    while (mooveArrow >= 360) {
        mooveArrow = mooveArrow - 360;
    }

    if (Math.sign(mooveArrow) === -1) {
        mooveArrow = (mooveArrow * (-1))
        while (mooveArrow > 360) {
            console.log(mooveArrow);
            mooveArrow = mooveArrow - 360;
        }

        mooveArrow = 360 - mooveArrow;
    }

    let goal = '';
    Object.keys(compas).forEach((key) => {

        if (compas[key] === mooveArrow) {
            return goal = key;
        }
    });
    return console.log(goal);
}

// direction("W", -630);
// console.log(8 ** (1 / 3));

//----------- 09.05.22
// tag Fundamentals

//Training JS #2: Basic data types--Number

/* In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / % */

var v1 = 50;
v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250

function equal1() {
    var a = v1
    var b = v1
    return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
    var a = v3 //set number value to a
    var b = v1 //set number value to b
    return a - b;
}

function equal3() {
    var a = v1 //set number value to a
    var b = v5 //set number value to b
    return a * b;
}

function equal4() {
    var a = v4 //set number value to a
    var b = v5 //set number value to b
    return a / b;
}

function equal5() {
    var a = v2 //set number value to a
    var b = v3 //set number value to b
    return a % b;
}

//================================================
https: //www.codewars.com/kata/571edea4b625edcb51000d8e/train/javascript

    /*In javascript, String is one of basic data types. Use "" or '' to declare a string variable. It can be letters:a,b,c,A,B,C, numbers: 123..., Various symbol:@#$%^&* , Control symbol:\n,\t etc..

    String can use operators +, Connect two or more strings together.

    Task
    misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

    When you have finished the work, click "Run Tests" to see if your code is working properly.

    misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3 */

    var a1 = "A",
        a2 = "a",
        b1 = "B",
        b2 = "b",
        c1 = "C",
        c2 = "c",
        d1 = "D",
        d2 = "d",
        e1 = "E",
        e2 = "e",
        n1 = "N",
        n2 = "n"

function Dad() {
    //select some variable to combine "Dad"
    return d1 + a2 + d2;
}

function Bee() {
    //select some variable to combine "Bee"
    return b1 + e2 + e2;
}

function banana() {
    //select some variable to combine "banana"
    return (b2 + a2) + (n2 + a2) + (n2 + a2);
}

//answer some questions if you finished works above
function answer1() {
    //the answer should be "yes" or "no"
    return "no";
}

function answer2() {
    //the answer should be "yes" or "no"
    return "no";
}

function answer3() {
    //the answer should be "yes" or "no"
    return "yes";
}

//================================================
https: //www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

    //Training JS #4: Basic data types--Array

    /*
    In javascript, Array is one of basic data types. Define an empty array can use var arr=new Array() or var arr=[]

    Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

    Each element in the array has an index, use arr[index] to get the value of element.

    index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

    If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
    */

    /*
    var arr=[1,2,3];     //define an array arr contains elements 1 2 3
    arr.push(4);         //add element 4 to arr
    console.log(arr)     //[1,2,3,4]
    arr.pop();           //remove the last element from arr
    console.log(arr)     //[1,2,3]
    */

    /*Task
    I've written five function, each function receives a parameter: arr(an array), you should code something with arr. 
    1. getLength(arr)    should return length of arr
        2. getFirst(arr)     should return the first element of arr
        3. getLast(arr)      should return the last element of arr
        4. pushElement(arr)  should push an element to arr, and then return arr
        5. popElement(arr)   should pop an element from arr, and then return arr
    */

    function getLength(arr) {
        //return length of arr
        return arr.length
    }

function getFirst(arr) {
    //return the first element of arr
    return arr[0]
}

function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1]
}

function pushElement(arr) {
    var el = 1;
    //push el to arr
    arr.push(el)

    return arr
}

function popElement(arr) {
    //pop an element from arr
    arr.pop()
    return arr
}
//==================================================
https: //www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript

    //Training JS #5: Basic data types--Object

    /* 
    In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

    You can define the object attributes during initialization, like this:

    var animal={name:"dog"}
    you can also set/get some properties after the object definition, like this:

    var animal={}
    animal.name="dog"  (or animal["name"]="dog")
    Task
    Give you a function animal, accept 1 parameter:obj like this:

    {name:"dog",legs:4,color:"white"}
    and return a string like this:

    "This white dog has 4 legs."
    */

    function animal(obj) {
        let str = '';
        str = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
        return str
    }



//===============================================
//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

//Training JS #6: Basic data types--Boolean and conditional statements if..else

/*Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

function trueOrFalse(val){
  if ()    return ?;             
  else     return ?;
}
*/
function trueOrFalse(val) {
    if (Boolean(val) === false) return 'false';
    else return 'true';
}

//=============================================
//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

//Training JS #7: if..else and ternary operator

/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
*/

function saleHotdogs(n) {
    return ((n < 5) ? n * 100 :
        (n >= 5 && n < 10) ? n * 95 :
        (n >= 10) ? n * 90 : n * 90);
}

//================================================
//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

/*
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

function howManydays(month){
  var days;
  switch (){
  
  }
  return days;
}
*/

function howManydays(month) {
    var days;
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            days = 31;
    }
    return days;
}

//==============================================
//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

//Training JS #9: loop statement --while and do..while

/*
Task
Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

function padIt(str,n){
  coding here
}

*/

function padIt(str, n) {
    //coding here
    const sign = '*';
    do {
        --n;
        n % 2 ? str = str + sign : str = sign + str;
    } while (n > 0)
    return str;
}

//==================================================
//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

//Training JS #10: loop statement --for

/*
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

function pickIt(arr){
  var odd=[],even=[];
  code here..............<<<<
  return [odd,even];
}
*/

function pickIt(arr) {
    var odd = [],
        even = [];
    //coding here
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
    }

    return [odd, even];
}

//==================================================
//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript

//Training JS #22: Unlock new skills--Arrow function,spread operator and deconstruction