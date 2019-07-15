'use strict';

class Flower {
    color: string;
    waterLevel: number;

    constructor(color: string, waterLevel: number = 0) {
        this.color = color;
        this.waterLevel = waterLevel;
    }
}

export default Flower


/* addWater() {
    if (this.waterLevel < 5) {
        console.log('The ', this.color, 'flower needs water.')
        this.waterLevel += 4;
    } else (this.waterLevel > 5); {
        console.log('The ', this.color, 'flower does not need water.')
    }
} */