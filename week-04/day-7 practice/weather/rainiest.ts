'use strict';
/*Most rainy days
Write a method which can read and parse a file containing information about weather in various cities.
The method must return the name of the city which had the most rainy days.

Example
Output: Gyor*/

const fs = require('fs');

let fileContent = fs.readFileSync('cities.txt', 'utf-8');
//console.log(fileContent);

let splitFile: string = fileContent.toString().split(',');
let splitMore: string = splitFile.split('\r');
console.log(splitMore);


/* function rainiestCity(fileName: string): string {
   return
} */

function makeLines(fileContent: string): string[] {
    return fileContent.split('\r')
}
//console.log(makeLines(fileContent));
//console.log(fileContent.split('\n'));

function makeMoreLines(line: string): string {
    return line.split(',')[0]
}
//console.log(makeMoreLines(fileContent))


function everyThirdItem() {
    let onlyDates = [];
    for (let i: number = 0; i < fileContent.length; i +=3) {
        onlyDates.push(fileContent[i]);
    }
    return onlyDates;
}

//console.log(everyThirdItem());

/* for (let i: number = 0; i<fileContent.length; i++){

} */
