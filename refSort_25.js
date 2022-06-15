let arr1 = [14,14,17,5,7,17,13,5,7,4,14,11,5,11,13,14,17,5,5,14,11,5,13,11,11,5,13];

function createObjForSort(arr) {
    let workArr = [];
    let resultArr = [];
    for(let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let arrNumbers = arr.filter(item => item === element);
        workArr.push({name: element, value: arrNumbers.length});
    };
    workArr.sort((a, b) => a.value - b.value || b.name - a.name);
    workArr.forEach(element => {
        resultArr.push(element.name);
    })
    return resultArr;
};

console.log(createObjForSort(arr1));