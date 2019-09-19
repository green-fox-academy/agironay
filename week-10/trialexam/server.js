
const express = require('express');
const mysql = require('mysql');
const app = express();
//const bodyParser = require('body-parser');
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
});


app.get('/a/:alias', (req, res) => {
  let aliasQuery = req.params.alias;
  let { url } = req.body;
  connection.query('SELECT alias FROM alias WHERE alias = ?', [aliasQuery], (err, rows) => {
    if (err) {
      res.status(500).send({ message: 'error in DB' })
      return;
    }
    if (rows.length > 0) {
      connection.query('UPDATE alias SET hitCount = hitCount + 1 WHERE alias = ?', [aliasQuery], (err, rows) => {
        if (err) {
          res.status(500).send({ message: 'error with DB' })
          return;
        }
        connection.query('SELECT url FROM alias WHERE alias = ?', [aliasQuery], (err, rows) => {
          if (err) {
            res.status(500).send({ message: 'error with DB' });
            return;
          }
          let redirection = rows[0].url;
          res.redirect(redirection);
          console.log(redirection);
        });
      })
    }
  })
});

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

app.delete('/api/links/:id', (req, res) => {
  let deleteID = req.params.id;
  let secretCode = req.body.secretCode;
  connection.query('DELETE FROM alias WHERE secretCode = ?', [secretCode], (err, rows) => {
    if (err) {
      res.status(500).send({ error: 'something is wrong' })
    } else {
      console.log(`id was deleted from DB`);
      res.sendStatus(204)
    }
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});