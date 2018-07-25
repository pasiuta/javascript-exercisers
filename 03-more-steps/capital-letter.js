'use strict';

function capitalLetter(string) {
    const capitalLetter1 = string.split(' ');
    const arr = [];

    for (let i = 0; i < capitalLetter1.length; i++) {
        let word = capitalLetter1[i];
        let word2 = '';
        for (let j = 0; j < word.length; j++) {
            let symbol = word[j];
            if (j === 0) {
                symbol = symbol.toUpperCase();
            }
            word2 += symbol;
        }
        arr.push(word2);
    }

    return arr.join(' ');
}

const a = capitalLetter('hello my poc');
console.log(a);
