'use strict';

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;

let midParts: any = "%    %";
let squareTopBottom:string = "%%%%%%";

function drawweirdSquare () {
    console.log(squareTopBottom);
    for (let i: number = 0; i <lineCount-2; i++) {
        let midParts: any = "%    %";  
    console.log(midParts);
    }
    console.log(squareTopBottom);
}

drawweirdSquare();