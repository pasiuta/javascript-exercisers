'use strict';

function palindrome(array) {
    let array2 = [];
    for (let i = array.length - 2; i >= 0; i--) {
        array2.push(array[i]);
    }
    return array.concat(array2);
}

const a = palindrome([1, 2, 3]);
console.log(a);
//Suppose an array of numbers is given.
//  Create toPalindrome method that
//creates a palindrome out of your array in the following way:
//  > const arr = [1,2,3];
//[1, 2, 3]
//> const arr2 = arr.toPalindrome()
//  [1, 2, 3, 2, 1]