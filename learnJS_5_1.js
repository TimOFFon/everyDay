// Можно ли добавить свойство строке?


let str = "Привет";

str.test = 5;

console.log(str.test);

// Здесь авторы задачи ссылаются на механику интропретатора JS в работе с примитивами. Когда у примитива сробатывает вызов из-за оператора (.), примитив переходитв стадию "объеткт-обёртка", и в этот момент автор задачи предлогает записать в этот "временный объект" новое свойство, но не найдя это свойство/метод в прототипе, стадия "временного объекта" выключается. Так что переменная из условия задачи просто сотрётся сборщиком мусора и результат будет или undefined, или ошибка.

