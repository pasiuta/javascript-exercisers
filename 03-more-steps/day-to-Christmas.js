'use strict';
let one = new Date('September 2 2018 00:00:00'); // дата, до которой считаем.
let two = Date.now(); // текущее время
let remaining = one - two; // миллисекунды до даты
remaining /= 1000; // секунды до даты
remaining /= 60;    // минуты до даты
remaining /= 60;    // часы до даты
remaining /= 24;    // дни до даты
console.log(remaining);
