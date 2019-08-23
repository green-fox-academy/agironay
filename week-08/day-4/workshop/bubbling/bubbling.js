/* 'use strict';

Here is an image inspector, but the buttons are not implemented yet, that will be your task!
 - the nav buttons (up, down, left, right) move the background by 10px
 - the zoom buttons increase/decrease the image by 20%
 - attach only two event listeners to the nav element
   - one for navigation
   - one for zooming */

let size = 200;
let x = 0;
let y = 0;

let pic = document.getElementsByClassName('img-inspector')[0];


let moveClick = document.querySelectorAll(`[data-action='move']`);
/* function moveImage() {
  
} */

//moveClick.addEventListener('click', moveImage);


let zoomClick = document.querySelectorAll(`[data-action='zoom']`)[0];
/* let zoomOutClick = document.querySelectorAll(`[data-action='zoom']`)[1]; */

function zoomImage() {
  if (zoomClick.innerHTML === 'Zoom in') {
    pic.style.backgroundSize = `${size += 20}%`
  } else if (zoomOutClick.innerHTML === 'Zoom out') {
    pic.style.backgroundSize = `${size - 20}%`
  }
}

zoomClick.addEventListener('click', zoomImage);