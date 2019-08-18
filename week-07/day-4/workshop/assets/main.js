'use strict';

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
        }
        showTitles(response)
    }
}

function showTitles(data) {
    for (let i = 0; i < data.length; i++) {
        let h3Element = document.createElement('h3');
        h3Element.textContent = data[i].book_name;
        document.body.appendChild(h3Element)
    }
}

/* function showTitlesAuthor(data) {
    for (let i = 0; i < data.length; i++) {
        let pElement = document.createElement('p');
        pElement.textContent = data[i].book_name, aut_name;
        document.body.appendChild(pElement)
        console.log(pElement)
    }
} */


xhr.open('GET', 'http://localhost:3000/books')
xhr.send();