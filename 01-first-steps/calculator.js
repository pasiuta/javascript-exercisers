'use strict';

function calculator(type, x, y) {
    switch (type) {
        case 'summ':
            return x + y;
            break;
        case 'minus':
            return x - y;
            break;
        case 'multiply':
            return x * y;
            break;
        case 'divide':
            return x / y;
            break;
    }

}

const a = calculator('summ', 2, 4);
const b = calculator('multiply', 2, 4);
console.log(a);
console.log(b);