let listPlaylists = document.querySelector('.list-playlist');
let addPlaylist = document.querySelector('.addpic2');

/* function createNewPlaylist(name) {
  addPlaylist.addEventListener('click', function () {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'playlist');
    let newP = document.createElement('p');
    listPlaylists.appendChild(newDiv);
    newDiv.appendChild(newP);
    newP.innerHTML = name;
    let newImg = document.createElement('img');
    newImg.src = 'imgs/delete.png';
    newImg.setAttribute('class', 'delete1')
    newDiv.appendChild(newImg);
  })
}; 
createNewPlaylist('hi')
*/

//creating DOM elements
let removePlaylistButton = document.querySelectorAll('.delete1');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let play = document.getElementById('play');
let shuffle = document.getElementById('shuffle');
let volume = document.getElementById('volume');
let timeElapsed = document.getElementById('time-elapsed');
let songSlider = document.getElementById('song-slider');
let songLength = document.querySelectorAll('.song-length');
let volumeSlider = document.getElementById('volume-slider');


removePlaylistButton.forEach(function (but) {
  but.addEventListener('click', function () {
    console.log('remove playlist');
  })
});

//play pause DOM events
audio = new Audio();
audio.src = '../music/02-fever_333-burn_it-60e7ec4c.mp3';

let isPlaying = false;
function playPause() {
  if (isPlaying) {
    audio.pause()
    console.log('music paused')
  } else {
    audio.play();
    console.log('music is playing')
  }
};
audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};

play.addEventListener('click', playPause);

//space and m key events - play pause mute
document.onkeydown = function (e) {
  if (e.keyCode == 32) {
    play.click();
  } else if (e.keyCode == 32) {
    pause.click();
  } else if (e.keyCode == 77) {
    audio.muted = true;
  }
};

//mute audio
function muteMusic() {
  audio.muted = true;
  console.log('muted')
}
volume.addEventListener('click', muteMusic);

audio.onended = function () {
  alert('Thanks for listening bros');
};

/* let playlist = [
  {url: '../music/02-fever_333-burn_it-60e7ec4c.mp3', title: 'Burn it', artist: 'Fever333', Length: '3:52'},
  {url: './music/05 - Chlorine.mp3', title: 'Chlorine', artist: 'Twenty One Pilots', Length: '5:24'},
  {url: '../music/Organoid_-_09_-_Purple_Drift.mp3', title: 'Purple Drift', artist: 'Organoid', Length: '3:28'},
]; */
