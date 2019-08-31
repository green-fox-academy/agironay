'use strict';

let myPix = [
  { url: '../static/pics/1.jpg', title: 'Lofoten', descriptiontext: 'Beautiful Lofoten'},
  { url: '../static/pics/2.jpg', title: 'Senja', descriptiontext: 'Senja in Norway' },
  { url: '../static/pics/3.jpg', title: 'Ylvis', descriptiontext: 'I Kveld Med Yvlis - Norwegian talkshow' },
  { url: '../static/pics/4.jpg', title: 'Trolltunga', descriptiontext: 'Hanging over Ringedalsvatnet' },
  { url: '../static/pics/5.jpg', title: 'Oslo', descriptiontext: 'The city skyline' },
  { url: '../static/pics/6.jpg', title: 'Trollstigen', descriptiontext: '55 kms of one of the most beautiful serpentine mountain roads.' },
  { url: '../static/pics/7.jpg', title: 'Preikestolen', descriptiontext: 'Easy hike for a beautiful sight' },
  { url: '../static/pics/8.jpg', title: 'Kjeragbolten', descriptiontext: 'Rock stuck between two rocks.' },
];


let title = document.querySelector('.pictitle');
let text = document.querySelector('.pictext');

let mainImage = document.querySelector('.mainpic');
let thumbnails = document.querySelectorAll('.lilpic')

function clickAndShow(){
  thumbnails.forEach(thumbs => {
    thumbs.addEventListener('click', function(){
        thumbs.setAttribute('index', +1)
        console.log(index)
    })
  })
}
clickAndShow();

/* function showEverythingByClick() {
  thumbnails.forEach(thumbs => {
    thumbs.addEventListener('click', function () {
      let picNum = thumbs.src
      let index = picNum.charAt(34);
      mainImage.src = myPix[index - 1].url
      title.innerHTML = myPix[index - 1].title;
      text.innerHTML = myPix[index - 1].descriptiontext;
    })
  })
}

showEverythingByClick(); */

let leftButton = document.getElementsByClassName('.arrows');
let rightButton = document.querySelector('.arrows2');

/* rightButton.onclick = () => {
  let i = 0;

  mainImage.src = myPix[i+=1].url
} */

/* function rightImage() {
  let index = 0;
  if (index > myPix.length - 1) {
   index +1;
  }

  mainImage.src = myPix[index].url;

}

rightButton.addEventListener('click', rightImage);
 */
