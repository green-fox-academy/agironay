const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  if (req.query.distance === undefined && req.query.time === undefined) {
    res.send('w r o n g, give distance and time')
    res.sendStatus(400);
  } else if (req.query.distance === undefined) {
    res.send('no, give me a distance pls')
  } else if (req.query.time === undefined) {
    res.send('send me a time pls')
  } else {
    res.send({
      distance: `${req.query.distance}`,
      time: `${req.query.time}`,
      speed: `${req.query.distance / req.query.time}`
    });
  }
})

module.exports = app;