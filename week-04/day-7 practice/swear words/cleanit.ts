'use strict';

//Write a method which can read and parse a file containing not so family friendly text.
//The method must remove all the given words from the file and return the amount of the removed words
//Output = 17

let badWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

const fs = require('fs');

let fileContent = fs.readFileSync('./badwords.txt', 'utf-8');
//console.log(fileContent);

let badArr: string[] = []
badArr.push(fileContent.split(' '))
badArr = badArr.filter(e => e !== 'fuck');
console.log(badArr)

/*function makeArr() {
    let badArr: string[] = []
    badArr.push(fileContent.split(' '))
    
    
    let index = badArr.indexOf(badWords[0]);
    if (index !== -1) {
        badArr.splice(index, 1);
    }
    console.log(badArr)
    
   /*  for (let i: number = 0; i < badArr.length; i++) {
        if (badArr[i] == badWords[]) {
            badArr.splice()
        }
    } 
}*/

//makeArr();


function removeBadWords(fileName: string): number {

    return
}