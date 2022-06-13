let arr1 = [1, 1, 1, 1, 2, 2, 2, 2, 3,3,4,5];

function jumpSameElements(arr) {
    let  counter = 0;
    for (let i = 0; i < arr.length; i = counter) {
        // console.log(counter);
        // console.log(i);
        let elementA = arr[i];
        // console.log(elementA);
        
        for (let j = 0; j < arr.length; j++) {
            let elementB = arr[j];
            if(elementA === elementB && i < arr.length) {
                counter++;
            } 
        }


    }
}

jumpSameElements(arr1);