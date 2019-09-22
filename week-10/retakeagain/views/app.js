'use strict';

let loadButton = document.querySelector('.loadmatrix');
let updateButton = document.querySelector('.saveit');
let updateMatrix = document.querySelector('.updatematrix'); //form2
let getMatrixId = document.querySelector('.matrixid');
let m1 = document.querySelector('.m1');
let m2 = document.querySelector('.m2');
let m3 = document.querySelector('.m3');
let m4 = document.querySelector('.m4');
let m5 = document.querySelector('.m5');
let m6 = document.querySelector('.m6');
let m7 = document.querySelector('.m7');
let m8 = document.querySelector('.m8');
let m9 = document.querySelector('.m9');

loadButton.addEventListener('click', e => {
  e.preventDefault();
  fetch(`/matrix/${getMatrixId.value}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      m1.value = response[0].m1;
      m2.value = response[0].m2;
      m3.value = response[0].m3;
      m4.value = response[0].m4;
      m5.value = response[0].m5;
      m6.value = response[0].m6;
      m7.value = response[0].m7;
      m8.value = response[0].m8;
      m9.value = response[0].m9;
    });
});

updateButton.addEventListener('click', e => {
  e.preventDefault();
  fetch(`/matrix/:${getMatrixId.value}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      getMatrixId: getMatrixId.value,
      m1: m1.value,
      m2: m2.value,
      m3: m3.value,
      m4: m4.value,
      m5: m5.value,
      m6: m6.value,
      m7: m7.value,
      m8: m8.value,
      m9: m9.value,
    })
  })
    .then(response => response.json())
});