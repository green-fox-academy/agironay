"use strict";

import { readFileSync } from "fs";

//Write a method which can read and parse a file containing not so family friendly text.
//The method must remove all the given words from the file and return the amount of the removed words
//Output = 17

let badWords: string[] = ["fuck", "bloody", "cock", "shit", "fucker", "fuckstick", "asshole", "dick", "piss", "cunt"];

const fs = require("fs");

let fileContent = fs.readFileSync("./badwords.txt", "utf-8");
//console.log(fileContent);

let lowerCaseWords: string[] = fileContent.toString().toLowerCase().split(' ');
let lowerCaseWordsWithoutChars: string []= lowerCaseWords.toString().replace(/\./gi,'').split(',');
//console.log(lowerCaseWords);
//console.log(lowerCaseWordsWithoutChars);

for (let i: number = 0; i < lowerCaseWords.length; i++) {
  for (let j: number = 0; j < badWords.length; j++) {
    let collectMatchingBadWords: string[] = [];
    if (lowerCaseWordsWithoutChars[i] !== badWords[j]) {
      continue;
    } else if (lowerCaseWordsWithoutChars[i] == badWords[j]) {
      collectMatchingBadWords.push(lowerCaseWordsWithoutChars[i]);
    }
    console.log(collectMatchingBadWords);
  }
}