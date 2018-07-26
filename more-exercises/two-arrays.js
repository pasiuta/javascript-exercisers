'use strict';

function twoArrays(array1, array2, position) {
    const array3 = [];
    const array4 = [];
    for (let i = 0; i < position; i++) {
        array3.push(array1[i]);
    }

    for (let i = position; i < array1.length; i++) {
        array4.push(array1[i]);
    }

    return array3.concat(array2).concat(array4);
}

const a = twoArrays(['abc', 'def', 'xyz'], ['a', 'b', 'c'], 2);
console.log(a);

//Написать функцию, которая принимает два массива
//(например `[‘abc’, ‘def’, ‘xyz’]`), позицию (число).
//  Функция должна вставлять на позицию второй массив.
//Пример:
//func ([‘abc’, ‘def’, ‘xyz’], [‘a’, ‘b’, ‘c’], 2)
//Ответ [‘abc’, ‘def’, ‘a’, ‘b’, ‘c’, ‘xyz’]