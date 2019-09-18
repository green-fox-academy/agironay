'use strict';

let form = document.querySelector('form');
let reportButton = document.querySelector('.report');
let manufacturer = document.querySelector('.manufacturer');
let serialno = document.querySelector('.serialno');
let description = document.querySelector('.description');

fetch('/users')
  .then(response => response.json())
  .then(response2 => {
    let myJson = response2.users;
    for (let i = 0; i < myJson.length; i++) {
      const select = document.querySelector('select');
      const option = document.createElement('option');
      option.value = `${myJson[i].id}`;
      option.text = `${myJson[i].name}`;
      select.appendChild(option);
    }
  })
  
reportButton.addEventListener('click', e => {
  e.preventDefault();
  let id = document.querySelector('.select').value
  fetch('/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      reporter: id,
      manufacturer: manufacturer.value,
      serialno: serialno.value,
      description: description.value,
    })
  })
    .then(response => response.json())
    .catch(error => console.error(error))
  form.reset();
});

