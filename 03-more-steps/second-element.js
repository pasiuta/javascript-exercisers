'use strict';

function secondElement(arr) {
    arr = arr.sort((a, b) => (a - b));
    const l = arr.length;

    return [arr[1], arr[l-2]];
}

const numbers = [-1 ,0, 4, -2, 2, 5, 11, 12, 1, 3, 7, 8, 9, 10];
const a = secondElement(numbers);
console.log(a);