'use strict';

function alphabetSoup(str) {
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    let str2 = '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const position = alphabet.indexOf(letter);
        arr.push(position);
    }

    arr = arr.sort((a, b) => a - b);

    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        const position = arr[i];
        str2 += alphabet[position];
    }

    return str2;
}

const a = alphabetSoup('zah');
console.log(a);