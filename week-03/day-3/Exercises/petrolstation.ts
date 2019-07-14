'use strict';

class Station {
    gasAmount: number;

    constructor(gasAmount: number){
        this.gasAmount = gasAmount;
    }

    refill(car: Car): void {
        this.gasAmount= car.capacity-car.gasAmount
        car.gasAmount += car.gasAmount;
    }
}


class Car {
    gasAmount: number;
    capacity: number;

    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

let OMV: Station = new Station(1000);

let Volvo: Car= new Car (20);
let Lada: Car= new Car (3);


console.log(Volvo);
OMV.refill(Volvo);
console.log(OMV);
console.log(Volvo);

console.log('-------')

console.log(Lada);
OMV.refill(Lada);
console.log(OMV);
console.log(Lada);