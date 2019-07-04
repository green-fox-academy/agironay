'use strict;'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function numSum(upTo: number): number {
    for (let i: number = 0; i <= upTo; i++) {
        return upTo += upTo;
    }
}

numSum(3);