/*1) replace the list items' content with items from this list:
  ['apple', 'banana', 'cat', 'dog']
  2) change the <ul> element's background color to 'limegreen'
    - use css class to change the color instead of the style property*/


let replaceWithFruits = document.querySelectorAll('li');

for (let i = 0; i < 4; i++) {
    let fruitsArray = ['apple', 'banana', 'cat', 'dog'];
    replaceWithFruits[i].textContent = fruitsArray[i];
}