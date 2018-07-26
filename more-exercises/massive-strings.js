'use strict';

function arrayStrings(array, position, string) {
    const array1 = [];
    const array2 = [string];

    for (let i = 0; i < position; i++) {
        array1.push(array[i]);
    }

    for (let i = position; i < array.length; i++) {
        array2.push(array[i]);
    }

    return array1.concat(array2)
}

const a = arrayStrings(['abc', 'def', 'xyz'], 1, 'word');
console.log(a);

//Написать функцию, которая принимает массив строк (например `[‘abc’, ‘def’, ‘xyz’]`),
//  позицию (число) и строку. Функция должна вставлять на позицию переданую строку.
//Пример:
//func ([‘abc’, ‘def’, ‘xyz’], 2, ‘word’)
//Ответ [‘abc’, ‘def’, ‘word’, ‘xyz’]
//func ([‘abc’, ‘def’, ‘xyz’], 0, ‘some big string’)
//Ответ [‘some big string’, ‘abc’, ‘def’, ‘xyz’]