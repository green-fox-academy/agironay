const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (req.query.message === undefined) {
    res.send('error: I am Groot!');
  } else {
    res.send({
      received: `${req.query.message}`,
      translated: 'I am groot!'
    });
  }
});

module.exports = app;