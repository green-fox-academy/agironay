'use strict';
//generate 100 divs to the <section> element and add index numbers to it as the element's textContent

let hundredSections = document.querySelector('section');


for (let i = 1; i <= 100; i++) {
  let div = document.createElement('div');
  div.textContent = i;
  hundredSections.appendChild(div);
}

//Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

let div = document.querySelectorAll('div')

function checkIfPrime() {
  for (let j = 0; j <= div.length; j++) {
    let counter = 0;
    for (let i = 2; i <= j; i++) {
      if ((j + 1) % i === 0) {
        counter++
      }
      (function (j) {
        setTimeout(function () {
          if (counter === 0) {
            div[j].setAttribute('class', 'prime')
          } else if (counter >= 1) {
            div[j].setAttribute('class', 'not-prime')
          }
          div[1].setAttribute('class', 'not-prime')
          div[0].setAttribute('class', 'not-prime')
        }, 100 * j);
      })(j);

    }
  }
}

checkIfPrime()

//3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

/* setInterval(function () {
  div.forEach(function (items) {
    items(checkIfPrime(100));
  });
},1000) */