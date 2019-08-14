const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;


app.use(express.static('assets'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling/', (req, res) => {
    if (req.query.input !== undefined) {
        res.send({received: req.query.input,
        result: req.query.input * 2})
    } else {
        res.send('error: Please provide an input!')
    }
    res.status(200);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});