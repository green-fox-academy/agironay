// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';

export = {};

declare function require(path: string): any;
const fs = require('fs');

function readLogFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (error) {
        return '';
    }
}

let fileContent: string = readLogFile('log.txt');


function createLinesBasedOnTextContent(fileContent: string): string[] {
    return fileContent.split('\n');
}


function getIPAddressOfLine(line: string): string {
    return line.split('   ')[1];
}

let IPAddresses: string[] = createLinesBasedOnTextContent(fileContent).map(function (line){
        return getIPAddressOfLine(line)
})

let uniqueIPAddresses: string[] = [];

for (let index: number = 0; index < IPAddresses.length; index++){
    const IPAddresses: string = IPAddresses[index];
    if (uniqueIPAddresses.indexOf(IPAdress) === -1;
    uniqueIPAddresses.push(IPAdress);
}

console.log(IPAddresses.length);
console.log(uniqueIPAddresses.length);