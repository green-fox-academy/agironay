'use strict';

/* const xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText)
      showTitles(response)
      console.log(response);
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

/* let titleButton = document.querySelector('.titles');
titleButton.addEventListener('click', showTitles);

xhr.open('GET', 'http://localhost:3000/books');
xhr.send('ok');


const xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === XMLHttpRequest.DONE) {
    if (xhr2.status === 200) {
      let reply = JSON.parse(xhr2.responseText)
      showAuthors(reply)
      console.log(reply);
    }
  }
}

function showAuthors(data) {
  for (let i = 0; i < data.length; i++) {
    let pElement = document.createElement('p');
    pElement.textContent = data[i].aut_name;
    document.body.appendChild(pElement)
  }
}

xhr2.open('GET', 'http://localhost:3000/author');
xhr2.send('ok'); */

const xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function () {
  if (xhr3.readyState === XMLHttpRequest.DONE) {
    if (xhr3.status === 200) {
      let reponse = JSON.parse(xhr3.responseText)
      showAll(reponse)
      console.log(reponse);
    }
  }
}

let table = document.createElement('table');
let th = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th');
let tr = document.createElement('tr')
th.textContent = 'Book Name';
table.append(th)
th2.textContent = 'Author Name';
table.append(th2);

function showAll(data) {
  for (let i = 0; i < data.length; i++) {
    document.body.appendChild(table)
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    cell1.textContent = data[i].book_name;
    let cell2 = row.insertCell(1);
    cell2.textContent = data[i].aut_name;
  }
}

xhr3.open('GET', 'http://localhost:3000/allinfo');
xhr3.send('ok');