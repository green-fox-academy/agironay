'use strict';

require('es6-promise');
//first
/* setTimeout(function () {
    console.log('TIMED OUT!')
}, 300); */

//second
/* new Promise(function (fulfill, reject) {
    setTimeout(() => fulfill('FULFILLED!'), 300);
}).then(function (result) {
    console.log(result)
}); */

//third
/* let promise = new Promise(function (fulfill, reject) {
  setTimeout(() => reject(new Error('REJECTED!')), 300);
})
function onReject(error) {
  console.log(error.message)
};
promise.then(console.log, onReject) */

//fourth
/* let promise = new Promise(function (fulfill, reject){
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});
function onReject(error){
  console.log(error.message)
};
promise.then(console.log, onReject) */

//fifth
/* let promise = new Promise(function(fulfill, reject){
  fulfill('PROMISE VALUE');
});
promise.then(console.log).then(console.log('MAIN PROGRAM')); */

//sixth shortcuts
//let promise2 = new Promise.resolve('HI');

let promise = new Promise.reject(new Error('BYE'));

promise.catch(function(err) {
  console.log(err);
});