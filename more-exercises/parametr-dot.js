'use strict';
function parametrDot(number) {
    let string = '';
    for(let i=0;i<=number;i++){
        string+=i;
        if(i!==number){
            string +='.';
        }
    }
    return string;
}
const a =parametrDot(10);
console.log(a);



//Написать функцию, которая принимает один параметр(числовой)
//и выводит числовую последовательность
//от 0 до параметра через точку.
  //  Пример: 0.1.2.3.4.5.6.7.8.9.10
