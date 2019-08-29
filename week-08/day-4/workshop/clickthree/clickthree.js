'use strict';

let button = document.querySelector('button');


setTimeout(function () {
  console.log('hi')
}, 5000);

let count = 0;
function countClicks() {
  if (count === 3) {
    let newP = document.createElement('p');
    document.body.appendChild(newP);
    newP.innerHTML = '(5 seconds elapsed and) button was clicked 3 times'
  } if (count < 3) {
    count++
  }
}



button.addEventListener('click', countClicks)