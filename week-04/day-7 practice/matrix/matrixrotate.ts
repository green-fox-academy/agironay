'use strict';

function rotateMatrix(matrix: number[][]): number[][] {
    let newMatrix: number[][] = [];
    
    for (let i: number = 0; i < matrix.length; i++) {
        newMatrix.push([]);
        for (let j: number = 0; j < matrix.length; j++) {
            newMatrix[i][j] = matrix[matrix.length-1-j][i];
        }
    }
    return newMatrix;
}

console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));