'use strict';

function secondstars(length) {
    let a = '';
    for (let c = 0; c < length; c++) {
        a += '*';
        console.log(a);
    }

}

secondstars(10);

function stars(maxlength) {
    let b = '';
    for (let i = 0; i < maxlength; i++) {
        b += '*';
        console.log(b);
    }

}

// stars(5);