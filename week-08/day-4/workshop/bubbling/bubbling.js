/* 'use strict';

Here is an image inspector, but the buttons are not implemented yet, that will be your task!
 - the nav buttons (up, down, left, right) move the background by 10px
 - the zoom buttons increase/decrease the image by 20%
 - attach only two event listeners to the nav element
   - one for navigation
   - one for zooming */

let size = 200;
let xCoord = 0;
let yCoord = 0;

let pic = document.getElementsByClassName('img-inspector')[0];
let buttons = document.querySelector('nav')

function zoomImageIn() {
  pic.style.backgroundSize = `${size += 20}%`
}
function zoomImageOut() {
  pic.style.backgroundSize = `${size -= 20}%`
}

function moveImageUp() {
  pic.style.backgroundPosition = `${xCoord}px ${yCoord -= 10}px`;
}

function moveImageDown() {
  pic.style.backgroundPosition = `${xCoord}px ${yCoord += 10}px`;
}

function moveImageRight() {
  pic.style.backgroundPosition = `${xCoord += 10}px ${yCoord}px`;
}

function moveImageLeft() {
  pic.style.backgroundPosition = `${xCoord -= 10}px ${yCoord}px`;
}


buttons.addEventListener('click', event => {
  if (event.target.dataset.direction === 'up') {
    moveImageUp();
  } else if (event.target.dataset.direction === 'down') {
    moveImageDown();
  } else if (event.target.dataset.direction === 'left') {
    moveImageLeft();
  } else if (event.target.dataset.direction === 'right') {
    moveImageRight();
  } else if (event.target.dataset.direction === 'in') {
    zoomImageIn()
  } else if (event.target.dataset.direction === 'out') {
    zoomImageOut();
  }
})