'use strict';

function sequence(number) {
    let string = '';
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0) {
            string += i;
        }
    }

    return string;
}

const a = sequence(10);
console.log(a);

//Написать функцию, которая принимает один параметр(числовой)
//и выводит числовую последовательность от 0 до параметра
//через два числа.
//  Пример: 0.3.6.9