'use strict';

function sumUnpaired(number) {
    let sum = 0;
    while (number > 0) {
      if(number%2!==0){
         sum+=number;
      }
      number--;
    }
    return sum;
}

const a = sumUnpaired(6);
console.log(a);

//написать функцию, которая принимает один параметр(числовой) и
//выводит cумму всех непарных чисел
//Пример: func(6)
//Oтвет: 9 (5+3+1)