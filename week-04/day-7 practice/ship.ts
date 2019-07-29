'use strict';

import Pirate from '../day-7 practice/pirate'

class Ship {
    name: string;
    pirateList: Pirate[] = []
    hasCaptain: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    addPirate(listPirate: Pirate[]) {
        if (this.hasCaptain == 0) {
            this.pirateList.push(${listPirate.name });
        } else {

        }
    }
}