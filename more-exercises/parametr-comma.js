'use strict';

function parametrComma(number) {
    let string = '';

    while (number) {
        string += number + ',';
        number--;
    }

    return string;
}

const a = parametrComma(10);
console.log(a);