// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict;'

declare function require(path: string): any;
const fs = require('fs');

function uniqueIDs (){

    return []
}
let uniqueID;
uniqueID = fs.readFileSync('log.txt', 'utf-8');