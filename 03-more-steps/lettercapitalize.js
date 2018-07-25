'use strict';

function letterCapitalize(word) {
    let str = '';

    for (let i = 0; i < word.length; i++) {
        const letter1 = word[i];
        str += letter1.toUpperCase()
    }

    return str;
}

const a = letterCapitalize('found');
console.log(a);