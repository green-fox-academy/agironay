'use strict';

class NumSum{
    numlist: number[] = [5, 10, 1];
    getSum(numlist: number[]):number {
        let sum: number = 0;

        for (let i: number = 0; i<numlist.length; i++){
            sum += numlist[i]
        }
        return sum;
    }
    }

export {NumSum};