'use strict';

function mergeArrays(array1, array2) {

    const sortArray = [];

    for (let i = 0; i < array1.length; i++) {
        const array1Element = array1[i];
        sortArray.push(array1Element)
    }

    for (let i = 0; i < array2.length; i++) {
        const array2Element = array2[i];
        sortArray.push(array2Element);
    }

    return sortArray.sort();
}

const array1 = [1, 5, 7, 3, 12, 6];
const array2 = [2, 4, 5, 12, 0, 4];

const a = mergeArrays(array1, array2);
console.log(a);