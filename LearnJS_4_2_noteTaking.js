// Копирование объектов

let objectRoot = {};
let objectCopy = objectRoot;

// console.log(objectRoot == objectCopy); // true
// console.log(objectRoot === objectCopy); // true

//----------------------------------------------

let objectA = {};
let objectB = {};

// console.log(objectA == objectB); // false
// console.log(objectA === objectB); // false

//-----------------------------------------------

// Клонирование и объединение объектов, Object.assign

let objRootSurface = {
    surfaceKey1: 'surfaceValue1',
    surfaceKey2: 'surfaceValue2',
};

let objCloneSurface = {};

for (let key in objRootSurface) {
    objCloneSurface[key] = objRootSurface[key];
}

objCloneSurface['surfaceKey2'] = 'surfaceValue2 + change';

// console.log(objRootSurface); // Без изменений
// {surfaceKey1: 'surfaceValue1', surfaceKey2: 'surfaceValue2'}

//------------- Feature (Object.assign)

let objTarget = new Object();

let objCargoOne = {
    section1: 1,
    section2: 2,
}
let objCargoTwo = {
    section3: 3,
    section4: 4,
}

Object.assign(objTarget, objCargoOne, objCargoTwo);

// console.log(objTarget); // {section1: 1, section2: 2, section3: 3, section4: 4}

// ------------  !!! drawback !!!

let objRootDeep = {
    surfaceKey1: 1,
    deepKey: {
        deepKey1: 'deepValue1',
        deepKey2: 'deepValue2'
    },
    surfaceKey2: 2,
};

let objTargetWrong = new Object();

Object.assign(objTargetWrong, objRootDeep);

objTargetWrong['deepKey']['deepKey2'] = 'deepValue2' + ' change';

let focusRoot = objRootDeep['deepKey']['deepKey2'];

// console.log(focusRoot); // deepValue2 change 
// objTargetWrong.deepKey - не клон objRootDeep


// ------------- deep cloning


function deepCloneV2(obj) {
    const clObj = {};
    for (const i in obj) {
        if (obj[i] instanceof Object) {
            clObj[i] = deepCloneV2(obj[i]);
            continue;
        }
        clObj[i] = obj[i];
    }
    return clObj;
};


let objRootDeepVal = {
    a1: 1,
    a2: 2,
    levelOne: {
        valOne1: 3,
        valOne2: 4,
        levelTwo: {
            valTwo1: 5,
            valTwo2: 6,
        }
    }
}

let objTargetClon = deepCloneV2(objRootDeepVal);


objTargetClon['levelOne']['levelTwo']['valTwo2'] = 7;

let focusRootObj = objRootDeepVal['levelOne']['levelTwo']['valTwo2'];

// console.log(focusRootObj); // 6 !!! НЕ ИЗМЕНИЛАСЬ !!!


// ------------- deep cloning (alternative versions)
let objRootDeepForAlt = {
    a1: 1,
    a2: 2,
    levelOne: {
        valOne1: 3,
        valOne2: 4,
        levelTwo: {
            valTwo1: 5,
            valTwo2: 6,
        }
    }
}
let objAlternativeOne = JSON.parse(JSON.stringify(objRootDeepForAlt));

// objAlternativeOne['levelOne']['levelTwo']['valTwo2'] = 7;

// let focusRootAlternative = objRootDeepForAlt['levelOne']['levelTwo']['valTwo2'];

// console.log(focusRootAlternative); // 6 НЕ ИЗМЕНИЛАСЬ!!