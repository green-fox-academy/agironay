// -  Create a function called `factorio`
//    that returns it's input's factorial

//3! 3*2*1

function factorio(nummie: number) {
    for (let i: number = 1; i >= nummie; i--) {
        return  nummie * (i-1);
    }
}

console.log(factorio(3));