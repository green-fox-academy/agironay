'use strict';
//generate 100 divs to the <section> element and add index numbers to it as the element's textContent

let hundredSections = document.getElementsByTagName('section');
for (let i = 1; i <= 100; i++) {
    let div = document.createElement('div');
    div.textContent = i;
    hundredSections[0].appendChild(div);
}

//Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

let div = document.querySelectorAll('div')
let num = 100;
function checkIfPrime(num) {
    if (num === 1) {
        return false
    }else if (num == 2){
        return true;
    } else {
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}
function addClass(){
    div.forEach(function(items){
        if(checkIfPrime(num) == true){
            items.setAttribute('class', 'prime')
        } else {
            items.setAttribute('class', 'not-prime')
        }
    })
}

let counter = 0;
setInterval(function(){
    if (counter == num){
        clearInterval()
    } else {
        counter++
        addClass(div[counter]);
    }
},1000)
