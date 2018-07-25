'use strict';

function IsLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else
                return false;
        }
        else
            return true;
    }
    return false;
}

const a = IsLeapYear(2016);
console.log(a);
