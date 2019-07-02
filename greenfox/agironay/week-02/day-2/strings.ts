'use strict;'

export = {};

let single: string = 'single quotes';

let double: string = "double quotes";

let backTick: string = `Today is ${(100 **2)-1}`;
console.log(single, double, backTick);

console.log(single.length);
console.log(single.toUpperCase());
console.log(single.toLowerCase());
//putting a specific letter to upper/lowercase eg. "appletree", 3 → "appLetree"
function toUpperCaseAtIndex (text:string, index: number):string {
    let prefix: string = text.slice(0, index);
    let replaceUpperCase: string = text.charAt(index).toUpperCase();
    let suffix: string = text.slice(index+1);
    return prefix.concat(replaceUpperCase).concat(suffix);
}
console.log(toUpperCaseAtIndex("appletree", 5));
console.log(toUpperCaseAtIndex("appletree", 2));

let greeting: string = 'hello create class create';
let greetingTheRightWay: string = greeting.replace(/create/g,'Create');

let lettersOfWord: string[] = greeting.split(' ');


console.log(lettersOfWord);
console.log(greeting);
console.log(greetingTheRightWay);

let textToSlice: string = '1234567890';
let spliced: string = textToSlice.slice(4, -3);
console.log(spliced);