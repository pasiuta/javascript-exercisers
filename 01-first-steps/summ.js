'use strict';

function sum(maxNumber) {
    let sum = 0;

    for (let i = 1; i <= maxNumber; i++) {
        sum += i;
    }

    return sum;
}

const a = sum(3);
console.log(a);