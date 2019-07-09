// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict;'

//the filed from i copied stuff is: copyfromhere.txt
//it will create a file that's called copytohere.txt (if it already exists→it will just overwrite the contents)

declare function require(path: string): any;
const fs = require('fs');

function copyFiles(fromfile: any, tofile: any) {
    fs.copyFileSync('copyfromhere.txt', 'copytohere.txt');
    
}


try {
    copyFiles('copyfromhere.txt', 'copytohere.txt');
    if ('copytohere.txt'.length !== 0){
        console.log('copy was successful')
    }
} catch {
    console.log('unfortunately it didn\'t work');
}