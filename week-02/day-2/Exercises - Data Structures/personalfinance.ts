'use strict';

/* Create a list with the following items.
500, 1000, 1250, 175, 800 and 120
Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? */

let myList: number[] = [500, 1000, 1250, 175, 800, 120];

let spent: number = 0;
for (let i: number = 0; i<=myList.length; i++){
    spent += myList[i];
}
console.log("Today I spent", spent ,"$€$€");