let trash = document.getElementById('trash');

function sayHi(){
    let newP = document.createElement('p');
    document.appendChild(newP)
    newP.innerHTML = 'hi'
}
trash.addEventListener('click', sayHi)