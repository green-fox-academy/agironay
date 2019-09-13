'use strict';

const mysql = require('mysql');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('views'));

app.set('view engine', 'ejs');

const PORT = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'school'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection established(mysql)');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/school/class', (req, res) => {
  connection.query('SELECT * FROM class',(err,resp)=>{
    if (err){
      console.log('something is wrong :((')
    } else {
      res.status(200).send(resp);
    }
  })
});

app.post('/school/class',(req,res)=>{
  const {nickname, curricular} = req.body;
  /* const nickname = req.body;
  const curricular = req.body */
  console.log(req.body)
  connection.query('INSERT INTO class (nickname, curricular) VALUES (?, ?)', [nickname, curricular], (err,resp)=>{
    if(err){
      res.send(err)
    } else {
      res.send({message: `${nickname} has signed up for ${curricular} activity`});
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
