'use strict';

/*
Remove the king from the list.
Fill the list based on the following list of objects.
Only add the asteroids to the list.
Each list item should have its category as a class and its content as text content.*/

const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];

document.querySelector('.asteroids').children[0].remove();

for (let i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid) {
        let newElementList = document.createElement('li');
        newElementList.textContent = planetData[i].content;
        newElementList.setAttribute('class', planetData[i].category);
        document.querySelector('.asteroids').appendChild(newElementList);
    }
}