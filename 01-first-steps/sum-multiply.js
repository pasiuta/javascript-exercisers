'use strict';
const arr = [1, 2, 3, 4];

function arraysum(array) {
    let sum1 = 1;
    for (let i = 0; i < array.length; i++) {
        sum1 *= array[i];
    }
    console.log(sum1);
}

arraysum(arr);


//Определите функцию sum () и функцию multiply (), которая суммирует и умножает (соответственно)
//все числа в массиве чисел.
//  Например, сумма ([1,2,3,4]) должна возвращать 10,
//а умножить ([1,2,3,4]) должна вернуть 24.