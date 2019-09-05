'use strict';
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText)
      showTitles(response)
    }
  }
}

function showTitles(data) {
  for (let i = 0; i < data.length; i++) {
    let pElement = document.createElement('p');
    pElement.textContent = data[i].book_name;
    document.body.appendChild(pElement)
  }
}

xhr.open('GET', 'http://localhost:3000/books');
xhr.send('ok');