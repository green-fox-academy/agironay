'use strict';
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.json());

const PORT = 3000;

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'retake'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/matrix/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT id, m1, m2, m3, m4, m5, m6, m7, m8, m9 FROM matrices WHERE id = ?;', id, (err, resp) => {
    if (err) {
      res.status(500).send('problems with the DB');
    } else if (!resp[0]) {
      res.status(404).send('what you look for, found it is not <(-_-)> sorry')
    } else {
      res.send(resp)
    }
  })
});

app.put('/matrix/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  connection.query('UPDATE matrices SET m1 = ?, m2 = ?, m3 = ?, m4 = ?, m5 = ?, m6 = ?, m7 = ?, m8 = ?, m9 = ? WHERE id = ?;',
  [data.m1, data.m2, data.m3, data.m4, data.m5, data.m6, data.m7, data.m8, data.m9, id], (err, resp) => {
    if (err) {
      res.status(500).send('something is wrong');
    } else {
      res.send(`updated matrix with id ${id}`)
    }
  })
});


app.delete('/remove/:id', (req, res) => {
  const deleteMatrix = Number(req.params.id);
  connection.query('DELETE FROM matrices WHERE id = ?;', [deleteMatrix], (err, ress) => {
    if (err) {
      res.status(500).send('something is wrong');
    } else {
      res.status(200).send(`matrix deleted from DB with id: ${deleteMatrix}`)
    }
  })
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
