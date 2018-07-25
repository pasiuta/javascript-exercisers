'use strict';

function arrayPaired(array) {
   const array2 = [];
    for (let i = 0; i <= array.length; i++) {
        let p = i;
        if (i % 2 === 0) {
            p = 'a';
        }
        array2.push(p);
    }

    return array2;
}

const b = arrayPaired([1, 2, 3, 4, 5, 6]);
console.log(b);