'use strict';

class Person {
    constructor(name){
        console.log(name + ' Person constructor');
    }

    getID(){
        return 10;
    }
}

class Employee extends Person {
    constructor(name){
        super(name);
        console.log(name + ' Employee constructor');
    }

    getID(){
        return super.getID(); //it will be overwritten because PARENT class is invoked
        //return 50 → it would return 50 because it is defined here
    }
}

let e= new Employee('Chandler');
console.log(e.getID());