/* 'use strict';

Here is an image inspector, but the buttons are not implemented yet, that will be your task!
 - the nav buttons (up, down, left, right) move the background by 10px
 - the zoom buttons increase/decrease the image by 20%
 - attach only two event listeners to the nav element
   - one for navigation
   - one for zooming */

let box = document.getElementsByClassName('img-inspector')[0].style.backgroundImage = `url('weirdo.jpg')`;

let moveClick = document.querySelectorAll(`[data-action='move']`);
/* function moveImage() {
  
} */

//moveClick.addEventListener('click', moveImage);


let zoomClick = document.querySelectorAll(`[data-action='zoom']`)[0];
function zoomImage() {
  if(zoomClick.innerHTML === 'Zoom in'){
    box.style.backgroundSize +=20%;
  } 
}

/* zoomClick.forEach(function(items){
  console.log(items.innerHTML)
})
 */


zoomClick.addEventListener('click', zoomImage);