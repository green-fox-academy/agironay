'use strict';
import Restaurant from './restaurant'

abstract class Employee {
    name: string;
    experience: number;
    tips: number;
    moodLevel: number;
    
    constructor(name: string, experience: number = 0, tips?: number, moodLevel?: number) {
        this.name = name;
        this.experience = experience;
    }
    
    abstract work()
}

class Waiter extends Employee {
    constructor(name: string, experience: number, tips: number = 0) {
        super(name, experience)
        this.tips = tips;
    }
    
    work() {
        this.tips++
        this.experience++
    }
}

class Chef extends Employee {
    constructor(name: string, experience: number) {
        super(name, experience)
        let meals = new Map();
        meals.set('food',0)
        
    }
    
    work() {
        this.experience++
    }
    
    
    cook(food: string): void {
        this.meals.set(food)
        
        
    }
}

class Manager extends Employee {
    constructor(name: string, experience: number, moodLevel: number = 400) {
        super(name, experience)
        this.moodLevel = moodLevel;
    }

    haveAMeeting() {
        this.moodLevel -= this.experience
    }

    work() {
        this.experience++;
        this.haveAMeeting();
    }
}


export { Employee, Waiter, Chef, Manager };