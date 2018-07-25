'use strict';

function secondstars(length) {
    let a = [];
    const med = length / 2; // 5
    for (let c = 0; c <= length; c++) {
        if (c <= med) {
            a.push('*')
        } else {
            a.pop();
        }

        console.log(a.join(''));
    }

}

secondstars(21);
