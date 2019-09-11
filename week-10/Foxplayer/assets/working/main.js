let listPlaylists = document.querySelector('.list-playlist');
let addPlaylist = document.querySelectorAll('.addpic2');
let removePlaylistButton = document.querySelectorAll('.delete1');
let div = document.querySelectorAll('div');
let listPlaylistDiv = document.querySelectorAll('playlist')


//creating DOM elements
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let play = document.getElementById('play');
let shuffle = document.getElementById('shuffle');
let volume = document.getElementById('volume');
let timeElapsed = document.getElementById('time-elapsed');
let songSlider = document.getElementById('song-slider');
let songLength = document.querySelectorAll('.song-length');
let volumeSlider = document.getElementById('volume-slider');

//useless alert on trying to remove playlist item
removePlaylistButton.forEach(function (but) {
  but.addEventListener('click', function () {
    alert('NO!! :@')
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

/* let newImg = document.querySelectorAll('.delete1');*/


/* const url = 'http://localhost:3000/tracks';
fetch(url)
  .then(response => response.json()) */