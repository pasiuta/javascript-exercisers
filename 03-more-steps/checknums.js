'use strict';

function checkNums(num1, num2) {
    if (num2 > num1) {
        return 'true';
    } else if (num2 < num1) {
        return 'false';
    } else {
        return '-1';
    }

}

const a = checkNums(10, 10);
console.log(a);