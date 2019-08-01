'use strict';
import {Employee} from './employee'

class Restaurant{
    name: string;
    founded: number;
    employees: string[] = [];

    constructor(name: string, founded: number, employees: string[]){
        this.name = name;
        this.founded = founded;
        this.employees = employees;
    }

    guestsArrived(){
        this.employees.forEach(function(worker){
            this.worker.work();
        })
    }

    hire(newPerson: string){
        this.employees.push(newPerson)
    }

}

export default Restaurant;