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
    console.log("Connection established");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname+ '/index.html');
});


app.get('/books', (req, res) => {
    connection.query('SELECT book_name FROM book_mast', (err, rows) => {
        if (err) {
            console.log(err.toString())
        } else {
            res.send(rows)
        }
    })
});

app.get('/author', (req, res) => {
    connection.query('SELECT aut_name FROM author', (err, resp) => {
        if (err) {
            console.log(err.toString())
        } else {
            res.send(resp)
        }
    })
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});