'use strict';
function factorial(x){
    let b = 1;
    for (let i = 1; i <= x; i++) {
        b *= i;
    }
    return b;
}
const a = factorial(4);
console.log(a);

