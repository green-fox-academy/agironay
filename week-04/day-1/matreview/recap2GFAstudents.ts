import Person from './recap'

class GreenFoxStudent extends Person {
    gitHubUsername: string;
    frustrationLevel: number = 100;

    constructor(name: string, age: number, height: number, mood: string, gitHubUsername: string) {
        super(name, age, height, mood)
        this.gitHubUsername = gitHubUsername;
    }

    socialize(){
        console.log(`I don't even know the name of my friends anymore, it's been so long since I last saw them:"( )`)
    }

}

const averageJoe: Person = new Person('John', 25, 180, 'sad');
averageJoe.askMeHowIam();
console.log('this is Joe');
averageJoe.socialize();
//polymorphism ↨ overriding!
const sandor: GreenFoxStudent = new GreenFoxStudent('Sandor', 25, 185, 'eksandor', 'good');
sandor.socialize();

export default GreenFoxStudent;