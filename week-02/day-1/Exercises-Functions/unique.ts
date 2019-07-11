'use strict;'

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once


function makeUnique (listOfNums: number[]): number[] {
    let uniqueNums: number[] = [];
    listOfNums.forEach(function(item) {
        if (uniqueNums.indexOf(item) < 0) {
            uniqueNums.push(item);
        }
    })
    return uniqueNums;
}

console.log(makeUnique([3, 12, 21, 8, 14, 14, 25, 15, 8, 15, 34]));