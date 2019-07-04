'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let star: string = ''
let lineCountTop: number = 4;
let lineCountBottom: number = 3;

//top-half from previous exc.
for (let i: number = 0; i < lineCountTop; i ++) {
    let numStars: number = 2 * i + 1;
    let numEmpty: number = lineCountTop + i - numStars;
    console.log(Array(numEmpty + 1).join(' ') + Array(numStars + 1).join('*'));
}

//bottom-half
for (let j: number = 3; j >= 1; j--) {
    let numStars: number = 2*j+1;
    let numEmpty: number = lineCountBottom + j - numStars;
    for (let k = 0; k <= 0; k++) {
        console.log(Array(numEmpty+3).join(' ') + Array(numStars-1).join("*"))
    }
}
console.log(star);