'use strict';

let form = document.querySelector('form');
let reportButton = document.querySelector('.report');
let manufacturer = document.querySelector('.manufacturer');
let serialno = document.querySelector('.serialno');
let description = document.querySelector('.description');




let trrow = document.querySelector('tr');
let deleteButton = document.querySelectorAll('.deletebutton');
function deleteWithButton() {
  deleteButton.forEach(function (button) {
    let rowToRemove = button.parentElement.parentElement;
    let getID = button.parentElement.parentElement.children[0].innerHTML;
    button.addEventListener('click', function () {
      console.log('clicked row to be deleted')
      console.log(getID)
      console.log(rowToRemove)
      window.location.reload();
      fetch(`/tickets/${getID}`, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.status == 204) {
          rowToRemove.remove();
          console.log(`${getId} row with this id `)
          return;
        }
      })
      .catch(error => console.error(error))
    })
  })
}

fetch('/tickets')
.then(res => { deleteWithButton(); return res })

