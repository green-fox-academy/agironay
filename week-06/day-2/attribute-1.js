'use strict';
/* Write the image's url to the console.
Replace the image with a picture of your favorite animal.
Make the link point to the Green Fox Academy website.
Disable the second button.
Replace its text with 'Don't click me!'. */


//the function lets the picture load first then is it able to execute the request for writing the url to the console
//becuase i got an error

window.onload = function () {
    let picture = document.querySelector('img');
    console.log(picture.getAttribute('src'));
    
    document.querySelector('img').setAttribute('src', 'https://i.ebayimg.com/images/g/InEAAOSwYDZah5xl/s-l300.jpg');

    document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com');
    
    let disableButton = document.querySelector('.this-one');
    disableButton.disabled = true;
    disableButton.innerHTML = `Don't click me!`;
}
