app.get('/infos', (req, res) => {
  const { price } = req.query;
  connection.query('SELECT * FROM movietheatre WHERE price =?;', price, (err, rows) => {
    if (err) {
      res.status(500).send('problem with DB')
    } else if (plt) {
      connection.query(`SELECT * FROM movietheatre WHERE price < ${price};`, price, (err, resp) => {
        if (err) {
          res.status(500).send('problem with DB')
        } else {
          res.send({ resp })
        }
      })
    } else if (pgt) {
      connection.query(`SELECT * FROM movietheatre WHERE price > ${price};`, price, (err, resp) => {
        if (err) {
          res.status(500).send('problem with db')
        } else {
          res.send({ resp })
        }
      })
    } else {
      res.send({ resp })
    }
  })
});