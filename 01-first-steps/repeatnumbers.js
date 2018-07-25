'use strict';

function numberIter(x) {
    for (let i = 0; i < x; i++) {
        const b = [];

        for (let j = 0; j <= i; j++) {
            b.push(i + 1);
        }

        console.log(b.join(' '));
    }
}

numberIter(5);