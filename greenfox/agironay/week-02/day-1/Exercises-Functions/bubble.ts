'use strict;'

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function numAsc (myNums: number[]): number[]{
    myNums.sort();
    /* let uniqueNums: number[] = [];
    myNums.forEach(function(item) {
        if (uniqueNums.indexOf(item) < 0) {
            uniqueNums.push(item);
        }
    })
    return uniqueNums; */
}
console.log(numAsc([3, 12, 21, 8, 14, 14, 25, 15, 8, 15, 34]));






//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]