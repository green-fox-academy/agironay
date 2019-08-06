/*You can work in the html or in a separate js file.Like:
    1)  Fill every paragraph with the last one's content.
    2)  Do the same again, but you should keep the cat strong.*/


let lastParagraph = document.querySelector('.animals');

//console.log(lastParagraph.innerHTML);
//console.log(lastParagraph.textContent);

let allLines = document.querySelectorAll('p');

for (let i = 0; i < 4; i++) {
    if (i == 3) {
        console.log(lastParagraph.innerHTML)
    } else if (i < 3) {
        console.log(allLines[i].textContent = lastParagraph.textContent);
    }
}