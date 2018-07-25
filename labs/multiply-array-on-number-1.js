'use strict';

function multiply(array) {
    const arr2 = [];
    for (let i = 0; i < array.length; i++) {
        const n = array[i] * 2;
        arr2.push(n);
    }

    return arr2;
}

const a = multiply ([1, 2, 3]);
console.log(a);