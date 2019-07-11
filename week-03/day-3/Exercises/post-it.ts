'use strict;'

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor (backgroundColor: string, text: string, textColor: string){
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let myFirstPostIt: PostIt = new PostIt ('orange', 'Idea 1', 'blue');
let mySecondPostIt: PostIt = new PostIt ('pink', 'Awesome', 'black');
let myThirdPostIt: PostIt = new PostIt ('yellow', 'Superb!', 'green');


console.log(myFirstPostIt);
console.log(mySecondPostIt);
console.log(myThirdPostIt);