'use strict';

let numberToMultiply: number = 12;

let twice: number = numberToMultiply * 2;
console.log(twice);

let anothernumberToMultiply: number = 11;

let twiceAnotherOne: number = anothernumberToMultiply * 2;
console.log(twiceAnotherOne);

function printNumberAndChangeIt(inputNumber: number = 100): void {
    let doubledValue : number = inputNumber * 2;
    console.log(doubledValue);
}

printNumberAndChangeIt();
printNumberAndChangeIt(10);

function multiplication(base: number, another: number): number {
    return base * another;
}
console.log(multiplication(2,3));