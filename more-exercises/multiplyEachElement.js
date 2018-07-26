'use strict';

function multiplyEachElement(number) {
    let array = [];
    while (number > 0) {
        array.push(number * 2);
        number--;
    }
    return array.join('-');
}

const a = multiplyEachElement(11);
console.log(a);


//Написать функцию, которая принимает один параметр(числовой)
// и выводит числовую последовательность от введенного число до 0 через тире,
// где каждый парный елемент уможен на два и через тире.
// Пример: func(10)
//20-18-16-14-12-10-8-6-4-2-0