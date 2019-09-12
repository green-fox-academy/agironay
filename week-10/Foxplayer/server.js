'use strict';
const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('assets'));
app.use(express.urlencoded());

const PORT = 3000;
const mysql = require('mysql');

/* const fs = require('fs');
const mm = require('musicmetadata');
const readableStream = fs.createReadStream('sample.mp3');
const parser = mm(readableStream, function (err, metadata) {
  if (err) throw err;
  readableStream.close();
});
 */

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
    connection.query('SELECT title FROM playlists;', (err, rows) => {
        res.render('index', { rows });
    });
});

app.get('/playlists', (req, res) => {
    res.render('post');
});

app.get('/listplaylists', (req, res) => {
    connection.query('SELECT id,title FROM playlists;', (err, rows) => {
        res.send(rows);
    })
});

app.get('/tracks',(req,res)=>{
    connection.query('SELECT * FROM tracks;',(err,resp)=>{
        res.send(resp);
    })
})

/* app.get('/playlists-tracks',(req,res)=>{
    connection.query('SELECT * FROM tracks;',(err,res)=>{
        res.send(res)
    })
});
 */

app.post('/playlists', (req, res) => {
    let newPlaylist = req.body.title;
    console.log(req.body)
    connection.query('INSERT INTO playlists (title) VALUES (?);', [newPlaylist], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log('created new playlist called: ' + newPlaylist);
            res.status(201);
        }
    })
});

app.delete('/playlists', (req, res) => {
    let deletePlaylist = req.query.id;
    connection.query('DELETE FROM playlists WHERE id =?', [deletePlaylist], (err, rows) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log(`deleted playlist with id: `, +deletePlaylist);
        }
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});