'use strict';

const form = document.querySelector('form');
const url = document.querySelector('.url');
const alias = document.querySelector('.alias');
const container = document.querySelector('.container');

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