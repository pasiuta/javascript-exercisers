'use strict';

const number = 5;

function multiplication (iteration) {
    if (iteration <= number) {
        const row = [];
        for (let k = 1; k <= number; k++) { // from 1 to 5
            row.push(k * iteration);
        }

        console.log(row);
       // multiplication(iteration + 1);
    }
}

multiplication(9);

