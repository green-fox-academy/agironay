//strict mode means we can't delete variables can't name things inside the same object etc.
//but it will let us know automatically
'use strict';

let myName: string = "Agi";
'use strict';

let yourName: string = "Agi";
let herName: string = "Agii";

console.log(myName);
console.log(yourName);
console.log(herName);

let cutePuppy: string [] = ["Béla", "Lujzi", "Naszi", "Bonzi"]
console.log(cutePuppy[0]);
console.log(cutePuppy);

cutePuppy.forEach(function(puppyname) {
    console.log(puppyname);
}) //this is an anonymus function

for (let i: number = 0; i < cutePuppy.length; i++) {
    console.log(cutePuppy[i]);
}

//this is a tuple, here you can only put 2 types in the array, the order has to be the same
let diffArray: any[] = ["Mazli", true];
let diffArray2: Array<string | number> = ["Mazli", 2, 2];



console.log(diffArray);

diffArray.splice(0, 1, "agika");
console.log("----------------- after")


diffArray.forEach (function(item) {
    console.log(item);
})


//map deals with each element and returns all of them, the array length stays the same after returning it
let doubled: number [] = [1,2,3,4,5].map(function(i) {
    return i ** 2;
})

console.log(doubled);

//the filter you have to return either a true / false, gives back an array which is the same length or shorter
let odds: number[] = [1,2,3,4,5].filter(function(item) {
    return item% 2 !==0;
})

console.log(odds);

let magic : number[] = [];

console.log(magic[-100]);

let doubledd: number[] = [1,2,3,4,5].map(function(i) {
    if (i%2 == 0) {
        return i * 2;
    }
})


//using ... spread operator
let array1: number [] = [1,2];
let array2: number [] = [3,4];

let array3: number [] = [...array1, ...array2];
console.log(array3);
