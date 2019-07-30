'use strict';

function isSymmetric(matrix: number[][]): boolean {
    let output: boolean = true;

    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return !output;
            }
        }
    }
    return output;
}
console.log(isSymmetric([[1, 0, 1], [0, 2, 2], [1, 2, 5]]));
console.log(isSymmetric([[1, 1], [0, 1]]));