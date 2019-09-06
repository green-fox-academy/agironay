'use strict';

const xhr = new XMLHttpRequest;

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
    } console.log('alles gut')
    JSON.parse(xhr.responseText);
  } else {
    console.log('alles nicht gut')
  }
}

xhr.open('GET', 'http://localhost:3000/posts');
xhr.send('ok');
