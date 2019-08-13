'use strict';

/*
1) Create an < article > element for each kid
2) Create a < h3 > and a < p > element for each article and append them as a child to the < article >
    - The H3 should contain the owner's name
    - The p should contain the pet's name
3) Add the article to the pets div. */

const kids = [
    { 'petName': 'Wattled crane', 'owner': 'Bryant' },
    { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
    { 'petName': 'Mynah, common', 'owner': 'Nelie' },
    { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
    { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
    { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
    { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
    { 'petName': 'Bison, american', 'owner': 'Tommie' },
    { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
    { 'petName': 'Carpet snake', 'owner': 'Veda' },
    { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
  ];

for (let i = 0; i < kids.length; i++){
    let newArticleElement = document.createElement('article');
    let newH3Element = document.createElement('h3');
    let newPElement = document.createElement('p');
    newH3Element.textContent = kids[i].owner;
    newPElement.textContent = kids[i].petName;
    newArticleElement.appendChild(newH3Element);
    newArticleElement.appendChild(newPElement);
    document.getElementById('pets').appendChild(newArticleElement);
}