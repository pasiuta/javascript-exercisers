'use strict';

function sum(pairednumber) {
    let sum = 0;

    for (let i = 0; i <= pairednumber; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }

    return sum;
}

const a = sum(5);
console.log(a);
