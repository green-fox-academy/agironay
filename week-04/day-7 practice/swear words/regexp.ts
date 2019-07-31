"use strict";
​//mark's solution
declare function require(a: string): any;
​
export = {};
​
const fs = require("fs");
​
let content: string = fs.readFileSync("badwords.txt", "utf-8");
console.log(content);
​
const swearWords: string[] = [
  "fuck",
  "bloody",
  "cock",
  "shit",
  "fucker",
  "fuckstick",
  "asshole",
  "dick",
  "piss",
  "cunt"
];
​
let filter: RegExp = new RegExp(
  /fuck|bloody|cock|shit|fucker|fuckstick|asshole|dick|piss|cunt/gi
);
​
let filteredText = content.replace(filter, "");
fs.writeFileSync("b.txt", filteredText);