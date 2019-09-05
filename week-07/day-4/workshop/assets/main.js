'use strict';
const xhr3 = new XMLHttpRequest();
xhr3.onreadystatechange = function () {
  if (xhr3.readyState === XMLHttpRequest.DONE) {
    if (xhr3.status === 200) {
      let reponse = JSON.parse(xhr3.responseText)
      showAll(reponse)
    }
  }
}

let table = document.createElement('table');
let th = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');
let th4 = document.createElement('th');
let th5 = document.createElement('th');

th.textContent = 'Title';
table.append(th)
th2.textContent = 'Author';
table.append(th2);
th3.textContent = 'Genre';
table.append(th3);
th4.textContent = 'Publisher';
table.append(th4);
th5.textContent = 'Price';
table.append(th5);

function showAll(data) {
  for (let i = 0; i < data.length; i++) {
    document.body.appendChild(table)
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    cell1.textContent = data[i].book_name;
    let cell2 = row.insertCell(1);
    cell2.textContent = data[i].aut_name;
    let cell3 = row.insertCell(2);
    cell3.textContent = data[i].cate_descrip;
    let cell4 = row.insertCell(3);
    cell4.textContent = data[i].pub_name;
    let cell5 = row.insertCell(4);
    cell5.textContent = data[i].book_price;
  }
}


let hehe = function () {
  xhr3.open('GET', 'http://localhost:3000/allinfo');
  //xhr3.open('GET', 'http://localhost:3000/books');
  //xhr3.open('GET', 'http://localhost:3000/category');
  //xhr3.open('GET', 'http://localhost:3000/publisher');
  xhr3.send('ok');
}

let infoButton = document.querySelector('.info');
infoButton.addEventListener('click', hehe);