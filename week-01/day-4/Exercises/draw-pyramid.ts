// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 6;
let outPut: string = '';

for (let i = 0; i <lineCount; i++) {
    let myEmptySpace = "";   
    for(let j = 0; j <(lineCount-i-1); j++) {
        myEmptySpace += " ";
    }
        for (var k = 1; k <= 2*i + 1; k++) {
            outPut+="*";

        }
        console.log(myEmptySpace+outPut);
        outPut="";
    }


//let star: string = ''


/* for (let i: number = 0; i < lineCount; i ++) {
    let numStars: number = 2 * i + 1;
    let numEmpty: number = lineCount + i - numStars;
    console.log(Array(numEmpty + 1).join(' ') + Array(numStars + 1).join('*'));
} */

