'use strict';

import Plant from './plant'
import Flower from './flower';
import Tree from './tree';

class Garden extends Plant {
    plant: any;
    constructor(color, waterLevel){
        super(color, waterLevel)
    }

    addPlant(plant: Plant):void {
        this.plant.push(plant);
    }
}

flower1.addPlant(){
    
}