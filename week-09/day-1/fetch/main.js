'use strict';
let button = document.querySelector('button');
let container = document.querySelector('container');


let makeJoke = function () {
  const url = 'http://api.icndb.com/jokes/random';
  fetch(url)
    .then(response => response.json())
    .then(function (response) {
      let joke = response.value.joke;
      createP(joke);
    })
};

function createP(input) {
  let newP = document.createElement('p');
  document.querySelector('.container').appendChild(newP);
  newP.innerHTML = input;
}

button.addEventListener('click', makeJoke);