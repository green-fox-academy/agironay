// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candyButton = document.querySelector('.create-candies');
let lollyButton = document.querySelector('.buy-lollypops');
let candyRainButton = document.querySelector('.candy-machine');
let candyCounter = document.querySelector('.candies')
let lolly = document.querySelector('.lollypops');

let counter = 0;

let generateCandy = function () {
  candyCounter.innerHTML = counter += 10;
  console.log(counter + 'first')
  if (counter < 100) {
    lollyButton.disabled = true;
  } else if (counter <= 100) {
    lollyButton.disabled = false;
    console.log(counter + 'inside else if')
    createCandy();
  }
}
candyButton.addEventListener('click', generateCandy);

let reset = function () {
  counter = counter - 100;
}

let createCandy = function () {
  lollyButton.addEventListener('click', function () {
    lolly.innerHTML += '🍭';
    console.log(counter + 'inside create candy')
    candyCounter.innerHTML -= 100;
    reset();
  })
}




/////////////////////////////////////////////////
/* let addNotEnoughMsg = function () {
  let newP = document.createElement('p');
  newP.innerHTML = `you don't have enough candies`;
  document.body.appendChild(newP);
} */