'use strict';

function reverse(numberToRevers) {
    let reverse = '';
    numberToRevers = numberToRevers.toString();
    for (let i = numberToRevers.length - 1; i >= 0; i--) {
        reverse += numberToRevers[i];
    }

    return reverse;
}

const a = reverse(123456);
console.log(a);
