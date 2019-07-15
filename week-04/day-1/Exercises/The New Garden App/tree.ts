'use strict';

import Plant from './plant'

class Tree extends Plant {
    constructor(color: string, waterLevel: number){
        super(color, waterLevel)
        this.color = color;
        this.waterLevel = waterLevel;
    }
}

export default Tree