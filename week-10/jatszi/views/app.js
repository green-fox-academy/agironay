'use strict';
const form = document.querySelector('form');
const container = document.querySelector('.container');
let nickname = document.querySelector('.nickname');
let curricular = document.querySelector('.curricular');


form.addEventListener('submit', e => {
  e.preventDefault();
  fetch('/school/class', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nickname: nickname.value, curricular: curricular.value })
  })
    .then(response => response.json())
    .then(function(message){
      let newP = document.createElement('p');
      container.appendChild(newP);
      newP.innerHTML = JSON.stringify(message);
    })
});