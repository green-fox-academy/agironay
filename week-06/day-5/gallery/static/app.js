'use strict';

let myPix = [
    { url: '../static/pics/1.jpg', title: 'Lofoten', descriptiontext: 'Beautiful Lofoten' },
    { url: '../static/pics/2.jpg', title: 'Senja', descriptiontext: 'Senja in Norway' },
    { url: '../static/pics/3.jpg', title: 'Ylvis', descriptiontext: 'I Kveld Med Yvlis - Norwegian talkshow' },
    { url: '../static/pics/4.jpg', title: 'Trolltunga', descriptiontext: 'Hanging over Ringedalsvatnet' },
    { url: '../static/pics/5.jpg', title: 'Oslo', descriptiontext: 'The city skyline' },
    { url: '../static/pics/6.jpg', title: 'Trollstigen', descriptiontext: '55 kms of one of the most beautiful serpentine mountain roads.' },
    { url: '../static/pics/7.jpg', title: 'Preikestolen', descriptiontext: 'Easy hike for a beautiful sight' },
    { url: '../static/pics/8.jpg', title: 'Kjeragbolten', descriptiontext: 'Rock stuck between two rocks.' },
];

let leftButton = document.getElementsByClassName('.arrows');
let title = document.getElementsByClassName('.pictitle')
let text = document.getElementsByClassName('.pictext')


function selectPic(){
    const mainImage = document.querySelector('.mainpic');
    const thumbnails = document.querySelectorAll('.lilpic')

    thumbnails.forEach(thumbs =>{
        thumbs.addEventListener('click', function(){
            const picNum = thumbs.src
            let index = picNum.charAt(34);
            mainImage.src = myPix[index-1].url;
             
        })
    })
}

selectPic();

/* rightButton.onclick = () => {
    nextPic();
} */

/* let LastPic = document.querySelector('.bigpic') = myPix[7].url;
let startingSmallPic = document.querySelector('.pic') = myPix[0].url;
let LastSmallPic = document.querySelector('.pic') = myPix[7].url; */
/*
function toTheRight() {

}



function switchTitleDescription() {
    for (let i = 0; i < myPix.length; i++) {

    }
} */