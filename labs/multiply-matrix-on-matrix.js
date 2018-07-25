'use strict';

function multiplyMatrixToNumber(matrix1, matrix2) {

    const multipliedMatrix = [];

    for (let i = 0; i < matrix1.length; i++) {
        const updatedRow = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            const firstMatrixElement = matrix1[i][j];
            const secondMatrixElement = matrix2[i][j];
            // const updatedElement = firstMatrixElementPosition * secondMatrixElementPosition;
            // updatedRow.push(updatedElement);
            console.log('----');
            console.log(firstMatrixElement);
            console.log(secondMatrixElement);
            console.log('----');
        }

        // multipliedMatrix.push(updatedRow);
    }

    // return multipliedMatrix;
}

const matrix1 = [
    [1, 2],
    [3, 4],
];

const matrix2 = [
    [2, 4],
    [6, 8],
];

const a = multiplyMatrixToNumber(matrix1, matrix2);
console.log(a);