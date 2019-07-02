'use strict;'

let emptyList: string[] = [];
if (typeof emptyList !== 'undefined' && emptyList.length > 0){
    console.log('it is not empty, it has: ',+ emptyList.length, 'elements')
} else {
    console.log('it is empty :( ')
}
emptyList.push('William');
if (typeof emptyList !== 'undefined' && emptyList.length > 0){
    console.log('it is not empty, it has ',+emptyList.length,'element(s)')
} else {
    console.log('it is empty :( ')
}
emptyList.push('John', 'Amanda');
if (typeof emptyList !== 'undefined' && emptyList.length > 0){
    console.log('it is not empty, it has ',+emptyList.length,'element(s)')
} else {
    console.log('it is empty :( ')
}
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
console.log(emptyList);

//create a function that checks the length of the array and outputs some string connected to it and call it later on so it looks nicer