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
  database: 'orientationexam'
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
  connection.query('SELECT * FROM reporter', (err, resp) => {
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
  const {manufacturer, reporter} = req.query;
  let queryString ='';
  let empty = [];
  if (manufacturer && reporter) {
    queryString = 'SELECT * FROM tickets WHERE manufacturer = ? AND reporter = ?', empty = [manufacturer, reporter];
  } else if (manufacturer){
    queryString = 'SELECT * FROM tickets WHERE manufacturer = ?', empty = [manufacturer];
  } else if (reporter){
    queryString = 'SELECT * FROM tickets WHERE reporter = ?', empty = [reporter];
  } else {
    queryString = 'SELECT * FROM tickets';
  }
  connection.query(queryString, empty,(err,resp)=>{
    if (err){
      res.send({error: 'something is wrong'})
      return
    }
    res.render('tickets', { resp });
  })
})

app.post('/tickets', (req, res) => {
  const { name, manufacturer, serialno, description } = req.body;
  console.log(req.body);
  let date = new Date();
  //validation..,
  if (!name || !manufacturer || !serialno || !description) {
    res.sendStatus(400)
  } else {
    connection.query('INSERT INTO tickets (reporter, manufacturer, serialno, description, date) VALUES (?, ?, ?, ?, ?)',
      [name, manufacturer, serialno, description, date], (err, resp) => {
        if (err) {
          res.send({ message: 'something is wrong' });
        } else {
          res.status(200);
          console.log(`new report added to ${manufacturer} manufacturer`);
          connection.query('SELECT * FROM tickets WHERE id=?', resp.insertId, (err, resp) => {
            res.send(resp);
          })
        }
      })
  }
});

app.delete('/tickets/:id', (req, res) => {
  let deleteRow = req.params.id;
  connection.query('DELETE FROM tickets WHERE id = ?', [deleteRow], (err, resp) => {
    if (err) {
      res.status(500).send({error: 'something is not right'});
    } else {
      res.status(204).send(`deleted ticket with it: ${deleteRow} and`)
    }
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
