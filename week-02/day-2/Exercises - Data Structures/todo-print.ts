'use strict;'

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = 'My todo: \n'.concat( ' - Buy milk\n').concat(' - Download games\n').concat('   - Diablo');

console.log(todoText);