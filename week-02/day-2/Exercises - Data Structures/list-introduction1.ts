'use strict;'
//function to check if the list is empty → instead of writing console.log(emptyList.length) / if statements to get a string answer output
function isItEmpty() {
    if (typeof emptyList !== 'undefined' && emptyList.length > 0){
        console.log('it is not empty, it has: ',+ emptyList.length, 'element(s)')
    } else {
        console.log('it is empty :( ')
    }
}

let emptyList: string[] = [];
isItEmpty();

emptyList.push('William');
isItEmpty();

emptyList.push('John', 'Amanda');
isItEmpty();

console.log(emptyList[2]);

emptyList.forEach(function(names){
    console.log(names);
});

function givesNumber() {
for (let i: number = 1; i<=emptyList.length; i++) {
        console.log( i+"."+emptyList[i-1]);
}}
givesNumber();

emptyList.splice(1, 1);
emptyList.reverse();

emptyList.forEach(function(names){
    console.log(names);
});

emptyList.splice(0,)
isItEmpty();