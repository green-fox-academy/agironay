'use strict';

class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female'){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce():void {
        console.log('Hi, I\'m ',this.name,'a ',this.age,'year old ',this.gender)
    }

    getGoal(): void{
        console.log('My goal is: Live for the moment!')
    }
}

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays:number;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number = 0){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    getGoal():void{
        console.log('My goal is: Be a junior software developer.')
    }

    introduce(): void{
        console.log('Hi, I\'m ',this.name,'a ',this.age,'year old ',this.gender,'from ',this.previousOrganization, 'who skipped ',this.skippedDays,'days from the course already.')
    }

    skipDays(numberOfDays: number):number{
        return this.skippedDays+numberOfDays;
    }
}

class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate'){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;
    }

    getGoal(): void{
        console.log('My goal is: Educate brilliant junior software developers.')
    }

    introduce(): void{
        console.log('Hi, I\'m ',this.name,'a ',this.age,'year old ',this.gender,this.level,' mentor.')
    }
}

class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number = 0;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google'){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
    }

    introduce(){
        console.log('Hi, I\'m ',this.name,'a ',this.age,'year old ',this.gender, 'who represents',this.company,'and hired ',this.hiredStudents,'students so far.')
    }

    hire(): number{
        return this.hiredStudents++;
    }

    getGoal(){
        console.log('My goal is: Hire brilliant junior software developers.')
    }
}


let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}