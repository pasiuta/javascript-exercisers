'use strict';

function even(number) {
    let string = '';
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            string += i;
        }

    }

    return string;
}

const b = even(10);
console.log(b);

