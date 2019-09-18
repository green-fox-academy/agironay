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
  database: 'trialexam'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection to DB is established');
});

//renders home this is ok
app.get('/', (req, res) => {
  res.render('home')
});


//this is okay
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM dummyreporter', (err, resp) => {
    if (err) {
      res.status(500)
      res.send({ error: 'something is wrong' });
    } else {
      res.status(200).send({ users: resp });
    }
  })
});

//filtering with manufacturer is ok, reporter not yet (there is none apparently) because i need to post with them somehow
app.get('/tickets', (req, res) => {
  const { manufacturer, reporter } = req.query;
  let queryString = '';
  let empty = [];
  if (manufacturer && reporter) {
    queryString = 'SELECT * FROM dummytable WHERE manufacturer = ? AND reporter = ?', empty = [manufacturer, reporter];
  } else if (manufacturer) {
    queryString = 'SELECT * FROM dummytable WHERE manufacturer = ?', empty = [manufacturer];
  } else if (reporter) {
    queryString = 'SELECT * FROM dummytable WHERE reporter = ?', empty = [reporter];
  } else {
    queryString = 'SELECT * FROM dummytable';
  }
  connection.query(queryString, empty, (err, resp) => {
    if (err) {
      res.send({ error: 'something is wrong' })
      return
    }
    res.render('tickets', { resp });
  })
})

app.post('/tickets', (req, res) => {
  //const { reporter, manufacturer, serialno, description } = req.body;
  const data = req.body
  console.log(req.body);
  let date = new Date(); //when creating the table → DATETIME :)
  //validation..,
  if (!data.reporter || !data.manufacturer || !data.serialno || !data.description) {
    res.status(400);
  } else if (isNaN(Number.parseInt(data.serialno))) {
    res.status(401);
  } else {
    connection.query('INSERT INTO dummytable (reporter, manufacturer, serialno, description, date) VALUES (?, ?, ?, ?, ?)',
      [data.reporter, data.manufacturer, data.serialno, data.description, date], (err, resp) => {
        if (err) {
          res.status(500).send({ message: 'something is wrong' });
          return;
        }
        res.status(200).send({ message: `new report added to ${data.manufacturer} manufacturer` })
        console.log(`new report added to ${data.manufacturer} manufacturer`);
      })
  }
});

app.delete('/tickets/:id', (req, res) => {
  let deleteRow = Number(req.params.id);
  connection.query('DELETE FROM dummytable WHERE id = ?', [deleteRow], (err, resp) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send()
      console.log(`deleted ticket with id: ${deleteRow}`)
    }
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
