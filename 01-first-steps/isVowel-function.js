'use strict';

const alphabet = {
    a:'vowel',
    b:'notvowel',
    c:'notwovel',
    d:'notwovel',
    e:'vowel',
    f:'notwovel',
    g:'notwovel',
    h:'notwovel',
    i:'notwovel',
    j:'notwovel'
};

function isVowel(param) {
    // alphabet.b
    // alphabet['b']
    return alphabet[param];
}

 //const a = isVowel('3');
 //console.log(a);
console.log(alphabet['c']);