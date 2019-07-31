'use strict'

import Animal from './animal'
import Cat from './animalclasses'
import Dog from './animalclasses'
import Parrot from './animalclasses'

class Shelter {
    budget: number;
    animals: Animal[] = [];
    adoptersName: string[] = [];

    constructor(budget: number = 50, animalList: Animal[], adopterNameList: string[]) {
        this.budget = budget;
        this.animals = animalList;
        this.adoptersName = adopterNameList;
    }

    rescue(animal): number {
        animal.push(this.animals)
        return Shelter.length;
    }

    heal(): number {
        this.animals.forEach(function (element) {
            if (element == this.isHealthy && this.budget > element.healCost) {
                this.budget -= element.healCost;
                return 1;
            } else {
                return 0
            }
        })
        return;
    }

    addAdopter(name) {
        name.push(this.adoptersName)
    }

    findNewOwner() {
        if(this.adoptersName.length !== 0 && Animal.length !== 0){
            
        }

    }


}