'use strict';

import { Thing } from './thing';
import { Fleet } from './fleet';

class FleetOfThings {
    fleet: Fleet = new Fleet;
    
    constructor() {
        this.fleet.add(new Thing('Get Milk'));
        this.fleet.add(new Thing('Remove the obstacles'));
        this.fleet.add((new Thing('Stand up')));
        this.fleet.add(new Thing('Eat lunch'));


        console.log(this.fleet.getThings().length)
    }

    print(): string{
        let outcome: string = '';
        this.fleet.getThings().forEach(function(fleet){
            outcome += fleet
        });
        return outcome
    }
}

let finalToDoList: FleetOfThings = new FleetOfThings();
console.log(finalToDoList.print());


// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Create a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well


/* class FleetOfThings {
    fleet: Fleet;
    main() {
        this.fleet = new Fleet();


        constructor(){
            let Fleet: Fleet = new Fleet('Get milk');
        }

    }
} */