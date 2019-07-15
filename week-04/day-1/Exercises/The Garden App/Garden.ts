'use strict';

import Flower from './Flower'
import Tree from './Tree'

class Garden {
    flowers: Flower[];
    trees: Tree[];

    constructor(flowers: Flower[], trees: Tree[]) {
        this.flowers = flowers;
        this.trees = trees;
    }

    addFlower(flower: Flower) {
        this.flowers.push(flower)
    }

    addTree(trees: Tree) {
        this.trees.push(trees);
    }

    addWater(howMuchToAdd) {
        for (let i; i <= 2; i++) {
            let newWaterLevelFlo = 0;
            let newWaterLevelTree = 0;

            if (flowers[i].waterLevel < 5) {
                console.log('The ', flowers[i].color, 'flower needs more water!')
                newWaterLevelFlo += (flowers[i].waterLevel * 0, 75);
                console.log(newWaterLevelFlo)
            } else if (trees[i].waterLevel < 10) {
                console.log('The ', trees[i].color, 'tree needs more water!')
                newWaterLevelTree += trees[i].waterLevel * 0, 4;
                console.log(newWaterLevelTree)
            }
        }
    }
}

let flower1: Flower = new Flower('yellow')
let flower2: Flower = new Flower('blue')

let flowers: Flower[] = [];
flowers.push(flower1, flower2)

let tree1: Tree = new Tree('purple')
let tree2: Tree = new Tree('orange')
let trees: Tree[] = [];
trees.push(tree1, tree2);


let garden: Garden = new Garden(flowers, trees);
garden.addWater(40);

//console.log(garden.flowers[0])
console.log(garden);

//garden.addWater();