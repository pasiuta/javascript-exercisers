'use strict';

function secondstars(maxValue) {
    let a = '';

    for (let i = 0; i < maxValue; i++) {
        a += '*';
    }
    

    while (a.length) {
        console.log(a);
        a = a.slice(0, -1);
    }
}

const a = secondstars(5);
