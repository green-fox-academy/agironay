'use strict';

let submitButton = document.querySelector('.addrow');
let deleteButton = document.querySelectorAll('.deleterow');

let priceCell = document.querySelector('.price')

let inputTitle = document.querySelector('.inputtitle');
let inputGenre = document.querySelector('.inputgenre');
let p = document.querySelector('p')

submitButton.addEventListener('click', e => {
  e.preventDefault();
  fetch('/infos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: inputTitle.value,
      genre: inputGenre.value,
    })
  })
    .then(response => response.json())
    .then(response => {
      setTimeout(function () {
        window.location.reload()
      }, 2000);
      p.textContent = response.message
    })
});

function deleteRow() {
  deleteButton.forEach(function (button) {
    let id = button.parentElement.parentElement.children[0].innerHTML;
    button.addEventListener('click', e => {
      //window.location.reload()
      e.preventDefault();
      fetch(`/infos/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(response => {
          setTimeout(function () {
            window.location.reload()
          }, 2000);
          p.textContent = response.message
        })
    })
  });
}

fetch('/infos')
  .then(response => { deleteRow()})
