'use strict';

const url = 'http://secure-reddit.herokuapp.com/simple';

fetch(url)
  .then(response => response.json())
  .then(send);

function send(posts){
  for (let i = 0; i <posts.length; i++){
    let main = document.querySelector('main');
    let div = document.createElement('div');
    let posttitle = document.createElement('h2');
    let posturl = document.createElement('p');
    div.appendChild('posttitle');
    div.appendChild('posturl');
    posttitle.innerHTML = posts[i].title;
    posturl.innerHTML = posts[i].url;
    main.appendChild('div');
  }
}