'use strict';
const arr = [1, 2, 3, 'a', 'a', 2, 3, 5, 'a', 5, 5, 5];

function frequent(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (!obj[element]) {
            obj[element] = 0
        }
        obj[element] += 1;
    }
    let maxPosition = 0;
    let maxValue = 0;
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let value = obj[keys[i]];
        if (value > maxValue) {
            maxValue = value;
            maxPosition = keys[i];
        }
    }

    return maxPosition;
}

const b = frequent(arr);
console.log(b);