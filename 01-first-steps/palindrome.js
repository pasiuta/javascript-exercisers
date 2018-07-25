'use strict';

function palindrome(string) {
    let palindromestring = '';
    for (let i = string.length - 1; i >= 0; i--) {
        palindromestring += string[i];
    }
    const isPolindrom = palindromestring === string; // true || false
    return isPolindrom;
}

const a = palindrome('madam');
console.log(a);
