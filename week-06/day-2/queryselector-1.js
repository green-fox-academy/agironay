let king = document.getElementById('b325').innerHTML;
console.log(king);

let businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(function (write) {
    console.log(write.innerHTML)
})

//businessLamp.forEach(write => console.log(write.innerHTML))

let conceitedKing = document.querySelectorAll('.container');
conceitedKing.forEach(itsweird => {
    let splittedKingMan = itsweird.innerText.split('\n');
    splittedKingMan.forEach(valami => alert(valami))
})

/*console.log(splittedKingMan)
//conceitedKing.forEach(itsweird => console.log(itsweird.innerHTML))*/


let noBusiness = document.querySelectorAll('div');
noBusiness.forEach(logthem => console.log(logthem.innerText))