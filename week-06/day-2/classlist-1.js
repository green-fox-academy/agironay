'use strict';
/*    If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
      If the first p has an 'apple' class, replace cat's content with 'dog'
      Make apple red by adding a .red class
      Make balloon less balloon-like (change its shape)*/

let element = document.querySelectorAll('p');

if (element[3].classList.contains('dolphin')) {
    document.querySelector('.apple').textContent = 'pear';
}

if (element[0].classList.contains('apple')) {
    document.querySelector('.cat').textContent = 'dog';
}

document.querySelector('.apple').classList.add('red');

document.querySelector('.balloon').style.borderRadius = 0;