'use strict';

const xhr2 = new XMLHttpRequest();
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === XMLHttpRequest.DONE) {
    if (xhr2.status === 200) {
      let reply = JSON.parse(xhr2.responseText)
      showAuthors(reply)
      console.log(reply);
    } else {
        console.log('sumfins wong')
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
xhr2.send('ok');