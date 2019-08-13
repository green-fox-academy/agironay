'use strict';
//generate 100 divs to the <section> element and add index numbers to it as the element's textContent

let hundredSections = document.getElementsByTagName('section');
for (let i = 1; i <= 100; i++) {
    let div = document.createElement('div');
    div.textContent = i;
    hundredSections[0].appendChild(div);
}

//Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

function addIfPrime(num) {
    for (let i = 2; i < j; i++) {
        if (num % i == 0) {
            div[i].setAttribute('div', 'not-prime')
        } else {
            div[i].setAttribute('div', 'prime')
        }
    }
    return num > 1;
}

addIfPrime(100);