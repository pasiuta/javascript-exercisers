'use strict';

function extension(name) {
    const splittedByDot = name.split('.');
    console.log(splittedByDot);

    return splittedByDot[splittedByDot.length - 1];
}

const a = extension('s.js');
console.log(a);