// -  Create a function called `factorio`
//    that returns it's input's factorial

//3! 3*2*1

let sumFact: number = 1;

function factorio(nummie: number) {
    for (let i: number = nummie; i >= 1; --i) {
        sumFact = sumFact*i;
    }
    return  sumFact;
}

console.log(factorio(5));