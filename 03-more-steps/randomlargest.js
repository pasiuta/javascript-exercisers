'use strict';

function randomLargest(rangeStart, rangeFinish) {
    const first = randomInteger(rangeStart, rangeFinish);
    const second = randomInteger(rangeStart, rangeFinish);
    const third = randomInteger(rangeStart, rangeFinish);

    console.log('---');
    console.log('first ' + first);
    console.log('second ' + second);
    console.log('third ' + third);
    console.log('---');
    if (first > second && first > third) {
        return first;
    }

    if (second > first && second > third) {
        return second;
    }

    if (third > first && third > second) {
        return third;
    }

    // const randNumbers = [first, second, third];
    // console.log('---');
    // console.log(randNumbers);
    // console.log('---');
    // return randNumbers.sort()[randNumbers.length - 1];
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

const a = randomLargest(0, 1011);
console.log(a);
