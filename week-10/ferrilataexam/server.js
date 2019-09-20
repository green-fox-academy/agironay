const mysql = require('mysql');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.json());

const PORT = 3000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ferrilata'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/api/items', (req, res) => {
  connection.query('SELECT * FROM auction', (err, resp) => {
    if (err) {
      res.status(500).send('something is wrong with the DB')
      return;
    }
    res.send(resp);
  })
})


app.post('/api/items/:id/bids', (req, res) => {
  const data = req.body;
  const id = req.params.id;
  let today = new Date()

  connection.query('SELECT * FROM auction WHERE id = ?;', id, (err, response) => {
    if (err) {
      res.status(500).send('something is fishy')
    } else if (response[0].expiryDate < today) {
      console.log('Auction is over!')
    } else if(response[0].highestBid > data.amount){
      console.log('You need to bid more')
    }
  })

/*   connection.query('UPDATE auction SET highestBid = ?, highestBidderName = ? WHERE id = ?;', [data.amount, data.name, id], (err, rows) => {
    if (err) {
      res.status(500).send('not ok');
    } else {
      res.send({ message: 'Success!' });
    }
  }) */
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});