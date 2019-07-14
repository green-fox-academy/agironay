'use strict';

class Student {
    name: string;
    grades: string;

    constructor(name: string, grades: string) {
        this.name = name;
        this.grades = grades;
    }
    learn() {
        console.log(this.name + ' is finally learning something new! Her grades so far are ', this.grades);
    }

    question(teacher: Teacher): void {
        teacher.answer();
    }
}



class Teacher {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    teach(student: Student): void {
        student.learn();
    }

    answer() {
        console.log(this.name, 'who is the teacher, is answering a question');
    }

}

let student1: Student = new Student('Mariska', 'BAD');
let teacher1: Teacher = new Teacher('Lajos');

teacher1.teach(student1);
student1.question(teacher1);
