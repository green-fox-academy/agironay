'use strict';

/* Create an event listener which logs the current timestamp to the console once the button is clicked.
      When the button is clicked for the second or any other times no event listener should be called.
      Try to solve this two different ways.
      hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button */

let button = document.querySelector('button');

/* button.addEventListener('click', createTimeStamp); */

function createTimeStamp(){
  let date = new Date();
  let today = date.toDateString();
  let time = date.toLocaleTimeString();
  let newP = document.createElement('p');
  newP.innerHTML = (`Today is ${today} and the time when you clicked is: ${time}`);
  document.body.appendChild(newP); 
}

button.addEventListener('click', createTimeStamp);