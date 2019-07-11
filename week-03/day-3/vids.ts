//creating class (website), a constructor and a method (likesInK)

class website {
    url: string;
    facebookLikes: number;

    constructor(url:string, fbLikes: number){
        this.url = url;
        this.facebookLikes = fbLikes;
    }

    likesInK():string{
        return (this.facebookLikes/1000) + 'K';
    }
}

let google = new website("https://google.com", 12345);

console.log(google.likesInK());