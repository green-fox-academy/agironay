// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
declare function require(path : string) : any;
const fs = require('fs');

let content;
try {
  content = fs.readFileSync('myfile.txt', 'utf-8');
  console.log(typeof content);
} catch (e) {
  content = '';
}
 

let lines: string[] = content.split('\n');
console.log(lines.length);