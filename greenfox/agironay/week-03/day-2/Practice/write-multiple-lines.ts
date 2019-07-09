// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

'use strict;'

declare function require(path: string): any;
const fs = require('fs');

let addWhereWhatHowmany;
function writeToFile(path: string, words: string, num: number): any {
    if (fs.existsSync('addapplehere.txt')) {
        console.log('The file exists.');
    } else {
        console.log('wtf is going on');
    }
    for (let i: number = 1; i <= num; i++) {
        //console.log(words);
    }
    addWhereWhatHowmany = fs.writeFileSync(path, words);
}

try {
    writeToFile('addapplehere.txt', 'apple\n', 5);
} catch {
    console.log('');
}