'use strict';
const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('assets'));

const PORT = 3000;

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'foxplayer'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/listplaylists', (req, res)=>{
    connection.query('SELECT id,title FROM playlists;', (err, rows)=>{
        res.send(rows);
    })
});

app.get('/playlists', (req, res)=>{
    res.render('post')
});

app.post('/playlists',(req, res)=>{
    let newPlaylist = req.body.title;
    connection.query('INSERT INTO title VALUES (?)', newPlaylist.toString(), (err, rows)=>{
        console.log(newPlaylist)
    })
    res.send(newPlaylist);
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});