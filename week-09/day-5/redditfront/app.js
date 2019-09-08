'use strict';

const url = 'http://secure-reddit.herokuapp.com/simple/posts';

fetch(url)
  .then(response => response.json())
  .then(send);

function send(data){
  for (let i = 0; i <data.posts.length; i++){
    console.log(data.posts)
    let postsdiv = document.querySelector('.theposts');
    let div = document.createElement('div');
    let posttitle = document.createElement('h2');
    let posturl = document.createElement('h4');
    let votes = document.createElement('p')
    postsdiv.appendChild(div);
    div.appendChild(posttitle);
    div.appendChild(posturl);
    div.appendChild(votes);
    posttitle.innerHTML = data.posts[i].title;
    posturl.innerHTML = data.posts[i].url;
    votes.innerHTML = data.posts[i].score;
  }
}