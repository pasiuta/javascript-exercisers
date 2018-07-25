
'use strict';

function arrayPaired(array) {
    const array2 = [];
    for (let i = 1; i <= array.length; i++) {
        if (i % 2 !== 0) {
            array2.push(i);
        }
    }

    return array2;
}

const b = arrayPaired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(b);