'use strict';

const mysql = require('mysql');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.json());

const PORT = 3000;


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


//get movie infos based on id
app.get('/movies/:id', (req, res) => {
  const id = req.params.id
  connection.query('SELECT * FROM movietheatre WHERE id = ?', id, (err, resp) => {
    if (err) {
      res.status(500).send('something is wrong')
    } else if (resp.length === 0) {
      res.status(400).send(`movie not found with the given id: ${id}`)
    } else {
      res.send({ movies: resp })
    }
  })
});


//filter data in json for genre and movie title and price separately (which is an exact amount)
app.get('/infos', (req, res) => {
  const { title, genre, price } = req.query;
  let queryString = '';
  let empty = [];

  if (title && genre) {
    queryString = 'SELECT * FROM movietheatre WHERE title = ? AND genre = ? AND price = ?;', empty = [title, genre, price];
  } else if (title) {
    queryString = 'SELECT * FROM movietheatre WHERE title = ?;', empty = [title];
  } else if (genre) {
    queryString = 'SELECT * FROM movietheatre WHERE genre = ?;', empty = [genre];
  } else if (price) {
    queryString = 'SELECT * FROM movietheatre WHERE price = ?;', empty = [price];
  } else {
    queryString = 'SELECT * FROM movietheatre'
  }
  connection.query(queryString, empty, (err, resp) => {
    if (err) {
      res.status(500).send('problem with db')
    } else {
      res.render('movies', {resp})
    }
  })
});



//post title, genre, price added randomly, ID auto incremented
let randomizePrice = Math.floor(Math.random() * 10 + 11);

app.post('/infos', (req, res) => {
  const { title, genre } = req.body;
  console.log(randomizePrice)
  console.log(req.body)
  connection.query('SELECT title FROM movietheatre WHERE title = ?', [title], (err, rows) => {
    if (err) {
      res.status(500).send('sumting wong')
    } else if (rows.length !== 0) {
      res.send({ message: `movie called ${title} is already in our selection` })
    } else if (!title || !genre) {
      res.send({ message: `You have not filled out the fields properly` })
    } else {
      connection.query('INSERT INTO movietheatre (title, genre, price) VALUES (?, ?, ?);', [title, genre, randomizePrice], (err, resp) => {
        if (err) {
          res.status(500).send('problem with DB')
        } else {
          res.status(200).send({ message: `new movie called ${title} was added to the db 😊`, resp })
        }
      })
    }
  })
});

//delete based on id
app.delete('/infos/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM movietheatre WHERE id = ?;', id, (err, rows) => {
    if (err) {
      res.status(500).send('something is fishy')
      return;
    }
    res.status(200).send({ message: `movie deleted with id ${id}`, rows })
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
