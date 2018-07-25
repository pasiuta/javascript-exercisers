'use strict';

function palindrome(string) {
    let string2 = '';
    for (let i = string.length - 2; i >= 0; i--) {
        string2 += string[i];
    }
    return string.concat(string2);
}

const a = palindrome('xyz');
console.log(a);


//xyz
//->xyzyx