'use strict';
//generate 100 divs to the <section> element and add index numbers to it as the element's textContent

let hundredSections = document.getElementsByTagName('section');
for (let i = 1; i <= 100; i++) {
  let div = document.createElement('div');
  div.textContent = i;
  hundredSections[0].appendChild(div);
}

//Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

let div = document.querySelectorAll('div')

function checkIfPrime(num) {
  for (let j = 0; j <= num; j++) {
    let counter = 0;
    for (let i = 2; i <= j; i++) {
      if ((j + 1) % i === 0) {
        counter++
      }
    }
    if (counter === 0) {
      div[j].setAttribute('class', 'prime')
    } else if (counter >= 1) {
      div[j].setAttribute('class', 'not-prime')
    }
    div[1].setAttribute('class','not-prime')
    div[0].setAttribute('class','not-prime')
  }
}

checkIfPrime(100);

//setInterval(checkIfPrime(100), 5000)
setInterval(function(){ console.log('hello'); }, 3000);
