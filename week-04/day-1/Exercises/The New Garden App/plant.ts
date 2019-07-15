'use strict';

class Plant {
    color: string;
    waterLevel: number;

    constructor(color: string, waterLevel: number = 0){
        this.color = color;
        this.waterLevel = waterLevel;
    }
}

export default Plant;