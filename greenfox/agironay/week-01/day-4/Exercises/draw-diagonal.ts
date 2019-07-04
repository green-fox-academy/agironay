'use strict';


// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let sign: string = '';

let squareTopBottom:string = "%%%%%%";

for (let i: number = 0; i <lineCount-2; i++) {
    let numSign: number = i+2;
    let emptySign: number = 1*i;
    sign += '';
    console.log(sign);
}

//console.log(squareTopBottom +'\n' + squareTopBottom);