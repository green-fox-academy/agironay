// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = ''


for (let i: number = 0; i < lineCount; i ++) {
    let numStars: number = 2 * i + 1;
    let numEmpty: number = lineCount + i - numStars;
    console.log(Array(numEmpty + 1).join(' ') + Array(numStars + 1).join('*'));
}