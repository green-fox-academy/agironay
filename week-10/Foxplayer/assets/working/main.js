

let listPlaylists = document.querySelector('.list-playlist');


let addPlaylist = document.querySelector('.addpic2');
addPlaylist.addEventListener('click', function () {
  console.log('playlist adder');
  document.createElement
});


let removePlaylistButton = document.querySelectorAll('.delete1');
removePlaylistButton.forEach(function (but) {
  but.addEventListener('click', function () {
    console.log('remove playlist');
  })
});

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let shuffle = document.getElementById('shuffle');
let volume = document.getElementById('volume');
let timeElapsed = document.getElementById('time-elapsed');
let songSlider = document.getElementById('song-slider');
let songLength = document.querySelectorAll('.song-length');
let volumeSlider = document.getElementById('volume-slider');

audio = new Audio();
audio.src= '../music/02-fever_333-burn_it-60e7ec4c.mp3';
function startMusic(){
  audio.play();
  songLength.innerHTML = audio.src.length;
  console.log('play happened')
}
play.addEventListener('click', startMusic);

function pauseMusic(){
  audio.pause();
  console.log('pause happened')
}
pause.addEventListener('click', pauseMusic);

function muteMusic(){
  audio.muted = true;
  console.log('muted')
}

volume.addEventListener('click', muteMusic);

audio.onended = function() {
  alert('Thanks for listening bros');
};

/* volume.addEventListener('click', function(){
  console.log('hi')
}); */