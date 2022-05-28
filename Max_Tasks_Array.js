console.clear();
console.log("js start task");

export const input = [
  { value: "qweq", order: 4, expired: false },
  { value: "asdq", order: 2, expired: true },
  { value: "jkri", order: 1, expired: false },
  { value: "oiod", order: 3, expired: false }
];
// написать функцию, либо последовательность операций, которая вернет результат следующих условий
// результат есть строка из сконкатенированных value элементов коллекции, расположенных в обратном порядке букв,
// результат не содержит одинаковых букв, если буква уже добавлена в строку, она более не добавляется
// результат собирается только из непросроченных записей и конкатенируется в порядке возрастания order

function chekingObj(arr) {
  let str = "";
  const newArr = arr
    .filter((x) => !x.expired)
    .sort((a, b) => a.order - b.order);
  console.log(newArr);
}
chekingObj(input);