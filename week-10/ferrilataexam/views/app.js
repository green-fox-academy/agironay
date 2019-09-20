'use strict';

let UL = document.querySelector('ul')
let bidderName = document.querySelector('.biddername');
let bidAmount = document.querySelector('.bidamount')
let bidButton = document.querySelector('.bid')
let form = document.querySelector('form')
let title = document.querySelector('.select')


fetch('/api/items')
  .then(response => response.json())
/*   .then(response => {
    console.log(response)
    return response
  }) */
  .then(response => makeThings(response)) //.then(makeThings())

function makeThings(response) {
  for (let i = 0; i < response.length; i++) {
    let select = document.querySelector('select');
    let option = document.createElement('option');
    option.value = `${response[i].id}`;
    option.text = `${response[i].title}`;
    select.appendChild(option);
    let newLI = document.createElement('li')
    newLI.innerHTML = `${response[i].title} (highest bid: ${response[i].highestBid}, ${response[i].highestBidderName})`
    UL.appendChild(newLI);
  }
}

bidButton.addEventListener('click', e => {
  let select = document.querySelector('select');
  let id = select.value;
  console.log(id)
  fetch(`/api/items/${id}/bids`, {
    method: 'POST',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
    body: JSON.stringify({
      name: bidderName.value,
      amount: bidAmount.value
    }),
  })
    .then(response => response.json())
    //.catch(error => console.error(error))
});
