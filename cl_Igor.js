/* Task 1
https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript
Если задан двумерный массив, верните координаты 'x'.
Если 'x' не находится внутри массива, или если 'x' 
встречается несколько раз, возвращается [].
Координаты должны иметь нулевой индекс.
Предполагается, что в качестве входных данных вы всегда 
будете получать массив. Массив будет содержать только 'x' и 'o'.
Примеры тестовых ситуаций:

'Возвращает пустой массив, если вход является пустым массивом' => []
[] 
'Возвращает пустой массив, если x не найден' => []
[
  ['o', 'o'],
  ['o', 'o']
]
'Возвращает пустой массив, если найдено более одного x' => []
[
  ['x', 'o'],
  ['o', 'x']
]
'Возвращает [0,0], если x находится слева вверху' => [0, 0]
[
  ['x', 'o'],
  ['o', 'o']
]
'Возвращает [4,6] для примера ниже' => [4, 6]
[
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
*/
let arr = [
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"],
    ["o", "o", "o", "o", "o", "o", "x", "o"],
    ["o", "o", "o", "o", "o", "o", "o", "o"]
  ];
  
  let arr1 = [];
  
  let arr2 = [
    [["x", "o"], ["o", "o"]],
    [["x", "o"], ["o", "o"]]
  ];
  
  let arr3 = [
    [["x", "x"], ["o", "o"]],
    [["x", "x"], ["o", "o"]]
  ];
  
  // const xMarksTheSpot = (input) => {
  //   let arrResult = [];
  //   for (let i = 0; i < input.length; i++) {
  //     let arrOfStr = input[i].join("");
  //     if (arrOfStr.indexOf("x") !== -1) {
  //       arrResult.push(i);
  //       arrResult.push(arrOfStr.indexOf("x"));
  //     }
  //   }
  //   return arrResult.length > 2 ? (arrResult = []) : arrResult;
  // };
  
  const xMarksTheSpot = (input) => {
    let arrResult = [];
    for(let i = 0; i < input.length; i++) {
      for(let j = 0; j < input[i].length; j++) {
        
        if(input[i][j].indexOf('x') !== -1) {
          arrResult.push(i);
          arrResult.push(j);
        }
      }
    }
    return arrResult.length > 2 ? [] : arrResult;
  }
  
  console.log(xMarksTheSpot(arr2));
  console.log(xMarksTheSpot(arr3));
  console.log(xMarksTheSpot(arr));