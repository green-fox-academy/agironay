import Cookie from './cookie';

class Tray {
    cookies: Cookie[];

        bakeThemAll(): void{
            this.cookies.forEach(function(cookie){
                this.cookies.bakeMe();
            })
        }

        bakeThemAllAgain(): void{
            this.cookies.forEach(function(cookie) {
                this.cookies.bakeMe();
            })
        }
        bakeThemAllWithFor(): void{
            for (let i: number = 0; i< this.cookies.length; i++) {
                this.cookies[i].bakeMe();
        }
    }
        putOnTray(cookie: Cookie):void {
            this.cookies.push(cookie);
        }
}

let myFirstTray: Tray = new Tray();
let myFirstCookie: Cookie = new Cookie('elephant', false, 'vanilla');
let mySecondCookie: Cookie = new Cookie('spider', true, 'chocolate');
myFirstTray.cookies.push(myFirstCookie, mySecondCookie);
myFirstTray.bakeThemAll();
console.log(myFirstTray);