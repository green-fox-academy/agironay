'use strict;'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


let end: number = 0;

function summ(upTo: number) {
    
    for (let i: number = 0; i <= upTo; i++) {
        end = end+i;
    }
    return console.log(end);
}

summ(5);