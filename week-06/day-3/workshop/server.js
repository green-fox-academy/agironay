//how to set up a server
const express = require ('express');
const PORT = 3000;
const app = express();

//middleware
app.use(express.static('assets'));

//for ejs, not setting up a basic server
app.set('view engine','ejs')

//how to send a single file
app.get('/', (req, res) => {
    res.sendFile('index.html',{root: __dirname})
});

//to refer to ejs
app.get('/', (req, res) => {
    res.render('index.html');
});

/* app.get('/greet', (req, res) =>{
    res.render=('main',{name: req.query.name || Anonymus});
}); */


app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT}`)
});

//route
//nodemon -D  → won't have to stop and restart the server when you do stuff