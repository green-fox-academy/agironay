'use strict';

const mysql = require('mysql');
const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.static('assets'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection established');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/book', (req, res) => {
  res.sendFile(__dirname + '/bookindex.html');
});

app.get('/books', (req, res) => {
  connection.query('SELECT book_name FROM book_mast;', (err, rows) => {
    res.send(rows)
  })
});

app.get('/authors', (req, res) => {
  res.sendFile(__dirname + '/author.html');
});

app.get('/author', (req, res) => {
  connection.query('SELECT aut_name FROM author', (err, resp) => {
    if (err) {
      console.log(err)
    } else {
      res.send(resp)
    }
  })
});

app.get('/category', (req, res) => {
  connection.query('SELECT cate_descrip FROM category;', (err, rows) => {
    res.send(rows)
  })
});

app.get('/publisher', (req, res) => {
  connection.query('SELECT pub_name FROM publisher;', (err, rows) => {
    res.send(rows)
  })
});

app.get('/allinfo', (req, res) => {
  connection.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast, author, category, publisher WHERE author.aut_id=book_mast.aut_id AND category.cate_id=book_mast.cate_id AND publisher.pub_id=book_mast.pub_id;', (err, ress) => {
    if (err) {
      console.log(err)
    }
    res.send(ress)
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//filtering still needed