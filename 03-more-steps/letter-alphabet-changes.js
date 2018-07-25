'use strict';

function letterAlphabetChanges(str) {
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const position = alphabet.indexOf(letter);
        str2 += alphabet[position + 1];
    }

    let str3 = '';
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (letter === 'a' || letter === 'o' || letter === 'e' || letter === 'i' || letter === 'u') {
            letter = letter.toLocaleUpperCase();
        }
        str3 += letter;
    }
    return str3;
}

const a = letterAlphabetChanges('asdfghjklqwertyuiop');
console.log(a);
