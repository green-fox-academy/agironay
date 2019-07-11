class Cookie {
    shape: string;
    hasSparkles: boolean;
    flavor: string;
    id: number;
    static lastId: number = 1;
    private status: string = 'raw';
    static isYummy: boolean = true;

    bakeMe():void{
        this.status = 'baked to perfection';
    }

    checkMyStatus(): string{
        return this.status;
    }

    static howAreYouToday(mood: string):string{
    return `I am doing ${mood}`;
    }

    //backwards '' → ``!
    constructor(shape: string, hasSparkles: boolean, flavor: string): Cookie{ //it's like creating a new cookie from here, they are not assigned to the object without .this
        this.shape = shape;
        this.hasSparkles = hasSparkles;
        this.flavor = flavor;
        this.id = Cookie.lastId;
        Cookie.lastId++;
    }
}

//creating a new instance
let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla');
let mySecondCookie: Cookie = new Cookie('spider', true, 'chocolate');


console.log(myFirstCookie);//raw
/* myFirstCookie.bakeMe();
console.log(myFirstCookie);//perfectly baked!

console.log(mySecondCookie); //raw */

myFirstCookie.bakeMe(); //making sure that only inside methods can change private stuff
//myFirstCookie.howAreYouToday('good'); this cannot be called on an instance
console.log(Cookie.howAreYouToday('great!'));
console.log(myFirstCookie.checkMyStatus());

console.log(myFirstCookie);
console.log(mySecondCookie);

export default Cookie;