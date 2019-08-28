'use strict';

let button = document.querySelector('button');

let count = 0;
function countClicks() {
    count++
    if (count === 3) {
        let newP = document.createElement('p');
        document.body.appendChild(newP);
        newP.innerHTML = '(5 seconds elapsed and) button was clicked 3 times'
    }
}

/* document.captureEvents(countClicks); {
    setTimeout(function () {
        button.addEventListener('click', countClicks)
    }, 5000);
};
 */
button.addEventListener('click', countClicks)