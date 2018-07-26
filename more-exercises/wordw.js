'use strict';
function word(enter) {
    for (let i = 1; i <= enter.length; i++) {
        console.log(enter.slice(0, i));
    }
}

const a = word('word');