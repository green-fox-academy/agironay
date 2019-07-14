'use strict';

//Create an application which solves the following problems.

//What is John K. Miller's phone number?
//Whose phone number is 307-687-2982?
//Do we know Chris E. Myers' phone number?

let phoneNums = new Map;

phoneNums.set('William A. Lathan', '405-709-1865');
phoneNums.set('John K. Miller', '402-247-8568');
phoneNums.set('Hortensia E. Foster', '606-481-6467');
phoneNums.set('Amanda D. Newland', '319-243-5613');
phoneNums.set('Brooke P. Askew', '307-687-2982');

console.log(phoneNums.get('John K. Miller'));

phoneNums.forEach((v, k) => {
    if (v == "307-687-2982") {
        console.log('This phone number is',k,'\'s number');
    }
});

console.log(phoneNums.has('Chris E. Myers'));