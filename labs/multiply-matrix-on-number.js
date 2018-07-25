'use strict';

function multiplyMatrixToNumber(matrix, number) {

    const multipliedMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const updatedRow = [];

        for (let j = 0; j < row.length; j++) {
            const updatedElement = row[j] * number;
            updatedRow.push(updatedElement);
        }
        multipliedMatrix.push(updatedRow);
    }

    return multipliedMatrix;
}

const matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 55],
];



const a = multiplyMatrixToNumber(matrix, 2);
console.log(a);