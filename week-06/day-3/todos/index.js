const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const todos = [
    'get up',
    'survive',
    'go back to bed'
];

app.get('/todos', (req, res) => {
    res.render('server', {todos: todos});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});