'use strict';

function result(number, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= number;
    }

    return result;
}

const a = result(5, 3);
console.log(a);