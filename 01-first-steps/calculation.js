'use strict';
const globalSum = [];

function calculation(step, limit, sum){
    sum = sum + step;
    globalSum.push(sum);

    if (sum > limit) {
        let finalSumNumber = 0;
        for (let i = 0; i < globalSum.length; i++) {
             console.log('---');
             console.log(globalSum[i]);
            finalSumNumber = finalSumNumber + globalSum[i];
             console.log(finalSumNumber);
             console.log('---');
        }
        console.log(finalSumNumber);
        return sum;
    } else {
        calculation(step, limit, sum);
    }
}

calculation(23, 500, 0);








