'use strict';

function flat(a, b, c) {
    const p = (a+b+c) / 2;
    return Math.sqrt(p*(p - a) * (p - b) * (p - c));
}

const a = flat(4, 5, 2);
console.log(a);