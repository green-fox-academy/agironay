// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict;'

function printParams(...params: any[]): any {
    params.forEach(function(args){
        console.log(args);
    })
}

printParams('hi', 12345, 'yep these are numbers and strings')