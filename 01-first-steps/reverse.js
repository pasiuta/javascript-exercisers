'use strict';

function reverse(stringToRevers) {
    let reversedString = '';
    for (let i = stringToRevers.length - 1; i >= 0; i--) {
        reversedString += stringToRevers[i];
    }

    return reversedString;
}

const a = reverse('hello');
console.log(a);


//Определите функцию reverse (),
//   которая вычисляет изменение строки.
// Например, reverse ("jag testar")
//должен возвращать строку "ratset gaj".