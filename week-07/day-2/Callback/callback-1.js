'use strict';
// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(addOne(array[i]))
    }
    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]


// Exercise 2:
// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const mapWith2 = (array, callback) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(removeSecondLetter(array[i]));
    }
    return newArray
}

const removeSecondLetter = (string) => {
    let removed = [];
    for (let i = 0; i < string.length; i+=2) {
            removed.push(string[i])
    }
    return removed.join('')

}


console.log(mapWith2(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
