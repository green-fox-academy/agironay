'use strict';

function sortWord(word1: string, word2: string): boolean {

    let string1 = word1.split('').sort().join();
    let string2 = word2.split('').sort().join();

    if (string1 == string2) {
        return true
    } else {
        return false
    }
}

export { sortWord };

console.log(sortWord('hello','elloh'));