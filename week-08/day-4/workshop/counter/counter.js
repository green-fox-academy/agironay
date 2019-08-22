'use strict';

/* On the click of the button,
Count the items in the list
And display the result in the result element. */

let button = document.querySelector('button');
let getListItems = document.getElementsByTagName('li');
let changeContent = document.getElementsByClassName('result')[0];

function counter() {
  changeContent.innerHTML = getListItems.length;
}

button.addEventListener('click', counter);