'use strict';

// function calculator(type, x, y) {
//     if (type === 'summ') {
//         return x + y;
//     }
//     else if (type === 'minus') {
//         return x - y;
//     }
//     else if (type === 'multiply') {
//         return x * y;
//     }
//     else if (type === 'divide') {
//         return x / y;
//     }
// }

function calculator(type, x, y) {
    return {
        'summ': x + y,
        'minus': x - y,
        'multiply': x * y,
        'divide': x /y
    }[type];
}



const a = calculator('summ', 2, 4);
const b = calculator('multiply', 2, 4);
const c = calculator('divide', 4, 4);
const q = calculator('minus', 3, 2);
console.log(a);
console.log(b);
console.log(c);
console.log(q);