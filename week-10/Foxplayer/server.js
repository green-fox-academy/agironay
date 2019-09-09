'use strict';
const express = require('express');
const app = express();

app.set('view engine','ejs')
app.use(express.static('assets'));

const PORT = 3000;

app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
