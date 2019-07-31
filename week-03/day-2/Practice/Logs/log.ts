'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

export = {};

declare function require(path: string): any;

const fs: any = require('fs');

function readLogFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch (error) {
    return '';
  }
}

let fileContent: string = readLogFile('log.txt');

function createLinesBasedOnTextContent(fileConent: string): string[] {
  return fileConent.split('\n');
}

function getIPAddressOfLine(line: string): string {
  return line.split('   ')[1];
}

let IPAdresses: string[] = createLinesBasedOnTextContent(fileContent).map(function (line) {
    return getIPAddressOfLine(line)
  })

let uniqeIPAddresses: string[] = [];

for (let index: number = 0; index < IPAdresses.length; index++) {
  const IPAdress: string = IPAdresses[index];
  if (uniqeIPAddresses.indexOf(IPAdress) === -1) {
    uniqeIPAddresses.push(IPAdress);
  }
}


console.log(IPAdresses.length);
console.log(uniqeIPAddresses.length);

let posts: number = createLinesBasedOnTextContent(fileContent).filter(function (line: string) {
    return line.split('   ')[2] === 'POST /';
  }).length;


console.log('number of posts are:', posts);

let lines: string[] = fileContent.split('\n');

let iPAdressesObject = {};


lines.forEach(function (line) {
  let iPAddress: string = getIPAddressOfLine(line);
  if (iPAdressesObject[iPAddress] === undefined) {
    iPAdressesObject[iPAddress] = 1;
  } else {
    iPAdressesObject[iPAddress] += 1;
  }
});

console.log(iPAdressesObject);