'use strict';

class Tree {
    color: string;
    waterLevel: number;

    constructor(color: string, waterLevel: number = 0) {
        this.color = color;
        this.waterLevel = waterLevel;
    }
}

export default Tree