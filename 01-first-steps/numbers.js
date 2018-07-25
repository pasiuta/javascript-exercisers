'use strict';
function numbers(length) {
    let a='';
    for(let i =1;i<=length;i++){
        a += i;
        if(i !== length){
            a += '-';
        }
    }
    console.log(a);
}
numbers(10);