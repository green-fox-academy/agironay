'use strict';
import {Employee} from './employee'

class Restaurant{
    name: string;
    founded: number;
    employees: Employee [] = [];

    constructor(name: string, founded: number){
        this.name = name;
        this.founded = founded;
    }

    guestsArrived(){
        this.employees.forEach(function(workers){
            workers.work();
        })
    }

    hire(newPerson: Employee):void{
        this.employees.push(newPerson)
    }

}

export default Restaurant;