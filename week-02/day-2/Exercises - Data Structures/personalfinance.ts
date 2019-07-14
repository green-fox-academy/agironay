'use strict';

/* Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

let myList: number[] = [500, 1000, 1250, 175, 800, 120];

function sumOfspending (myList: number[]) : number {
    return myList.reduce(function(one: number, two: number):number{
        return one + two;
    })
}
console.log("Today I spent", sumOfspending(myList) ,"$money€");

function biggestSpending  (myList: number[]): number {
    return Math.max(...myList)
}
console.log('The most expensive item cost ', biggestSpending(myList));

function smallestSpending  (myList: number[]): number {
    return Math.min(...myList)
}
console.log('The cheapest item cost ', smallestSpending(myList));


let total2 = 0;
for (let i: number = 0; i<myList.length; i++){
    total2+=myList[i];
}

let average = total2/myList.length;
console.log('The average spending was',average,'$€');