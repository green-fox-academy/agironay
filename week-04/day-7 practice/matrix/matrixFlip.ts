'use strict';

/*myMatrix: number[][] =[
[1,2,3],
[4,5,6],
[7,8,9]}*/

function flipMatrix(matrix: number[][]): number[][] {
    let newMatrix: number[][] = [];
    
    for (let i: number = 0; i < matrix.length; i+2) {
        newMatrix.push([]);
            newMatrix[i] = matrix[i];
        }
    }
    return newMatrix;
}

console.log(flipMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].reverse())