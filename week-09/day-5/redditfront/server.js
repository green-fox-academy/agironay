'use strict';

//const app = require('../redditfront/app/app');
const PORT = 3000;


const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine','ejs')
app.use(express.static('assets'));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit',
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connection established');
    }
});

app.get('/',(req,res)=>{
    res.render('index');
});

/* app.get('/', (req, res) => {
    //res.send('hello')
    res.sendFile('/views/submit.html', { root: __dirname });
}); */


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
