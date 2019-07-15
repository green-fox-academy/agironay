class Person {
    name: string;
    age: number;
    height: number;
    mood: string;

    constructor(name: string, age: number, height: number, mood: string) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.mood = mood;
    }

    askMeHowIam(){
        console.log(`well I've been better`);
    }

    socialize(){
        console.log(`I'm seeing my friends every day!!`)
    }
}

const averageJoe: Person = new Person('John', 25, 180, 'sad');
averageJoe.askMeHowIam();

export default Person;