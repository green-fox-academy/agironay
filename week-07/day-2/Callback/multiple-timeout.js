'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const printFruits = () => {
    console.log('apple');
    setTimeout(() => {
        console.log('pear');
    }, 2000);
    setTimeout(() => {
        console.log('melon');
    }, 3000);
    setTimeout(() => {
        console.log('grapes');
    }, 5000);
}
printFruits();
  // Output is 1, 4, 3, 2
