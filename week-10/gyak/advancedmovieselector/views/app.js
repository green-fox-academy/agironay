'use strict';

let genre = document.querySelector('.genre')

fetch('/infos')
  .then(response => response.json())
  .then(response => showOptions(response))

function showOptions(response) {
  for (let i = 0; i < response.length; i++) {
    let selectMovie = document.querySelector('.choosemovie');
    let selectGenre = document.querySelector('.choosegenre')
    let option1 = document.createElement('option');
    option1.value = `${response[i].title}`;
    option1.text = `${response[i].title}`;
    selectMovie.appendChild(option1);
    let option2 = document.createElement('option');
    option2.value = `${response[i].genre}`;
    option2.text = `${response[i].genre}`;
    selectGenre.appendChild(option2);
  }
}