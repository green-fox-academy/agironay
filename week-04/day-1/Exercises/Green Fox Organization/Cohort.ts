'use strict';


class Cohort {
    name: string;
    student: any;
    mentor: any;

    constructor(name: string){
        this.name = name;
        this.student = [];
        this.mentor = [];
    }

    addStudent(Student){
        this.student.push(Student);
    }

    addMentor(Mentor){
        this.mentor.push(Mentor);
    }

    info(){
        console.log('The ',this.name, 'has ', this.student.length, 'students and ',this.mentor.length,'mentors.')
    }
}

export default Cohort;