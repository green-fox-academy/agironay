const express = require('express');
const app = express();

app.get('/rocket', (req, res) => {
  res.send({
    'caliber25': 0,
    'caliber30': 0,
    'caliber50': 0,
    'shipstatus': 'empty',
    'ready': false
  })
});

app.get('/rocket/fill', (req, res)=>{
  if(req.query.fill){
    
  }
})


module.exports = app;