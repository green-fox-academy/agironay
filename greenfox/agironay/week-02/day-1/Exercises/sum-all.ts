"use strict;"

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

/*let ai = [3, 4, 5, 6, 7];

for(let i: number = 0; i <= ai.length; i++){
    let sum = 0;
    sum += ai[i];
}
console.log(ai);*/
 


let ai = [3, 4, 5, 6, 7].reduce(function (a, b) {
    return a + b; }, 0)
console.log(ai);