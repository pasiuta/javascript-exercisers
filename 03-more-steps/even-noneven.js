'use strict';

function evenNonEven(number) {
    for (let i = 1; i <= number; i++) {
        console.log('---');
        console.log('Number ' + i + ' is ');
        if ((i % 2) === 0) {
            console.log('even');
        } else if (i % 2 !== 0) {
            console.log('odd');
        }
        console.log('----');
    }
}

const a = evenNonEven(17);
console.log(a);


//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration
//it will check if the current number is odd or even, and display a message to the screen.
//  Go to the editor
//Sample Output :
//  "0 is even"
//"1 is odd"
//"2 is even"