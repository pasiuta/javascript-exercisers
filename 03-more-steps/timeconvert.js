'use stirct';

function timeConvert(num) {
    const minutes = num % 60;
    const hours = (num - minutes) / 60;
    return `${hours}:${minutes}`;
}

const a = timeConvert(69);
console.log(a);