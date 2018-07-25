'use strict';

function word(enter) {
    while (enter.length) {
        console.log(enter);
        enter = enter.slice(0, -1);
    }
}

const a = word('word');