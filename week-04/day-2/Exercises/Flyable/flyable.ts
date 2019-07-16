'use strict';


import { Animals } from './../Zoo/animals'

interface Flyable {
    land();
    fly();
    takeOff();
}

abstract class Vehicle {
    type: string;
    NumOfPassengers: number;
    color: string;
}

class Helicopter extends Vehicle implements Flyable {
    land() {
    }
    fly() {
    }
    takeOff() {
    }


}

class Bird extends Animals implements Flyable {
    getName() {
    }
    breed() {
    }
    land() {
    }

    fly() {
    }

    takeOff() {
    }
}