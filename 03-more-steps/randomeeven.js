'use strict';

function randomEven(rangeStart,rangeFinish) {
    let count = 0;
    const randNumber = randomInteger(rangeStart, rangeFinish);
    console.log('randNumber: ' + randNumber);
    for (let i = rangeStart; i <= randNumber; i++) {
        if (i % 2 === 0) {
            count++
        }
    }
    return count
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const a = randomEven(1, 10);
console.log(a);