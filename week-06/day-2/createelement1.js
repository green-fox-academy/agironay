'use strict';
/*    Add an item that says 'The Green Fox' to the asteroid list.
      Add an item that says 'The Lamplighter' to the asteroid list.
      Add a heading saying 'I can add elements to the DOM!' to the .container.
      Add an image, any image, to the container.*/


let newAsteroid = document.createElement('li')
//newAsteroid.id = 'b327';
newAsteroid.className = 'asteroid';
newAsteroid.textContent = 'The Green Fox';
document.querySelector('.asteroids').appendChild(newAsteroid);

let otherAsteroid = document.createElement('li')
otherAsteroid.className = 'asteroid';
otherAsteroid.textContent = 'The Lamplighter';
document.querySelector('.asteroids').appendChild(otherAsteroid);

let heading = document.createElement('h1')
heading.textContent = 'I can add elements to the DOM!'
document.querySelector('.container').appendChild(heading);

let picture = document.createElement('img');
picture.src = 'https://i.imgur.com/jmvSRWT.jpg';
document.querySelector('.container').appendChild(picture);