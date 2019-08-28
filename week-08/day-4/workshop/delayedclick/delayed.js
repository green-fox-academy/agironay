'use strict';

let button = document.querySelector('button');

button.addEventListener('click', function () {
    setTimeout(() => {
        let newP = document.createElement('p');
        document.body.appendChild(newP);
        newP.textContent = '2 seconds elapsed';
    }, 2000);
})