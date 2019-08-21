'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.render('home', {myPix: myPix});
});

let myPix = [
  {url: '../static/pics/1.jpg', title: 'Lofoten', descriptiontext: 'Beautiful Lofoten'},
  {url: '../static/pics/2.jpg', title: 'Senja', descriptiontext: 'Senja in Norway'},
  {url: '../static/pics/3.jpg', title: 'Ylvis', descriptiontext: 'I Kveld Med Yvlis - Norwegian talkshow'},
  {url: '../static/pics/4.jpg', title: 'Trolltunga', descriptiontext: 'Hanging over Ringedalsvatnet'},
  {url: '../static/pics/5.jpg', title: 'Oslo', descriptiontext: 'The city skyline'},
  {url: '../static/pics/6.jpg', title: 'Trollstigen', descriptiontext: '55 kms of one of the most beautiful serpentine mountain roads.'},
  {url: '../static/pics/7.jpg', title: 'Preikestolen', descriptiontext: 'Easy hike for a beautiful sight'},
  {url: '../static/pics/8.jpg', title: 'Kjeragbolten', descriptiontext: 'Rock stuck between two rocks.'},
];


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});