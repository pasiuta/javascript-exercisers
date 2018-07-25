'use strict';
let words = ['hello', 'good', 'bye', 'yesterday'];

function filterLongWords(arrayOfStings, i) {
    const result = arrayOfStings.filter(word => word.length > i);
    console.log(result)
}

filterLongWords(words, 4);
//var arr = [1, -1, 2, -2, 3];

//var positiveArr = arr.filter(function(number) {
  //  return number > 0;
//});

//alert( positiveArr ); // 1,2,3

//const a = filterLongWords(arr, 5); // filter all elements in array where length > 3
//console.log(a); // ['dima', 'masha', 'vitaliya']

//Напишите функцию filterLongWords (),
// которая принимает массив слов и целое число i
// и возвращает массив слов, которые длиннее i.