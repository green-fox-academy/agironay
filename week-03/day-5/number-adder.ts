//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
'use strict';

function addNum(n: number): number {
    if (n <= 1) {
        return 1
    } else {
        return addNum(n - 1)+n;
    }
}

console.log(addNum(5));