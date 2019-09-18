'use strict';

const form = document.querySelector('form');
const url = document.querySelector('.url');
const alias = document.querySelector('.alias');
const container = document.querySelector('.container');
let id = document.querySelector

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('/api/links', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url.value,
            alias: alias.value
        })
    })
        .then(response => response.json())
        .then(function (myMessage) {
            let newP = document.createElement('p')
            container.appendChild(newP);
            newP.innerHTML = JSON.stringify(myMessage)
        });
        
});

function deleteAlias(){
    fetch('/api/links/:id', {
      method: 'DELETE',
    })
      .then(response => response.json())
      .catch(error => console.error(error))
}