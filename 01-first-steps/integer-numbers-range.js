'use strict';

function showMessage(x1, x2) {
    if (x2 < x1) {
        console.log(-1);
        return -1;
    }
    for (let i = x1; i < x2; i++) {
        console.log(i);
    }
}

showMessage(15, 12);



       // Напишите функцию в Javascript, которая имеет два целых числа x1 и x2
      //  возвращает все целые числа между ними. Если x2 es меньше, чем x1, он должен возвращать -1