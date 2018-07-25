'use strict';

const array =['Hello','Qwerty','Dimadiamdimad'];
function findLongestWord(arrayOfStrings) {
    let longestWord = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        const string = arrayOfStrings[i];
        if (string.length > longestWord) {
            longestWord = string.length;
        }

    }
    return longestWord;

}

const a = findLongestWord(array);
console.log(a);
//Напишите функцию findLongestWord (),
    //которая принимает массив слов и возвращает длину самого длинного.
