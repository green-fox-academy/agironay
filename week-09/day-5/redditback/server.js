const mysql = require('mysql');
const express = require('express');

const PORT = 3000;
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } console.log('mysql connection established');
});

//app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.get('/hello', (req, res) => {
    console.log('connection established');
    res.send({ hello: 'world' })
});

app.get('/posts', (req, res) => {
    connection.query('SELECT * FROM posts;', (err, resp) => {
        res.send({ posts: resp })
    });
});

app.post('/posts', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
