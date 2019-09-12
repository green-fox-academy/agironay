
const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.json());

const PORT = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'trialexam'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
});

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/api/links', (req, res) => {
    connection.query('SELECT id,url,alias,hitCount FROM alias', (err, resp) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(resp);
        }
    })
})

app.post('/api/links', (req, res) => {
    const { alias, url } = req.body;
    console.log(req.body)
    let secretCode = Math.floor(1000 + Math.random() * 9000);
    console.log(secretCode);
    connection.query('SELECT alias FROM alias WHERE alias = ?', [alias], (err, resp) => {
        if (resp.length > 0) {
            res.send({ message: `${alias} is already in use` });
        } else {
            connection.query('INSERT INTO alias (url, alias, secretCode) VALUES (?, ?, ?)', [url, alias, secretCode], (err, rows) => {
                if (err) {
                    res.send(err.toString());
                } else {
                    res.send({ message: `Your URL is aliased to ${alias} and your secret code is ${secretCode}.` })
                }
            })
        }
    })
});



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});