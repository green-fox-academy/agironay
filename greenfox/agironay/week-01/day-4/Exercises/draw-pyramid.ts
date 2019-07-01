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

for (let i: number = 0; i <= lineCount; i++) {
    star +='*'
    console.log(star)
}


for (let i: number = 0; i < lineCount; i ++) {
    let numOfStars: number = 2 * i + 1;
    let numOfSpaces: number = lineCount + i - numOfStars;
    console.log(Array(numOfSpaces + 1).join(' ') + Array(numOfStars + 1).join('*'));
 }