'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('index.ejs')
})

app.listen(3000,()=>
console.log(`Listening on ${PORT}`)
);