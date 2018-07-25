'use strict';

function countWords(str) {
    const spaces = ' ';
    let amountOfSpaces = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === spaces) {
            amountOfSpaces = amountOfSpaces + 1;
        }
    }

    return amountOfSpaces + 1;
}
/*function countWords2(str) {
    return str.split(' ').length;
}*/

const a = countWords('Dima Diablo the best but he peace of shit and pussy');
const b = countWords('a b c d');
const c = countWords('123 435 56758 6789');
// const a2 = countWords2(string);
console.log(a);
// console.log(a2);