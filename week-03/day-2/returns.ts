'use strict';

function factorial(base: number): number {
    if (base < 0) {
        throw Error('something is not working hmm maybe because it\'s a negative number');
    }
    let returnValue: number = 1;
    for (let i: number = 2; i <= base; i++) {
        returnValue *= i;
    }
    return returnValue;
}

console.log(factorial(3));

function printPretty(toPrettify: number): string {
    return `the pretty number is ${toPrettify}`;
}

try {
    console.log(printPretty(factorial(-100)))
} catch (e) {
    console.log(e.message);
}