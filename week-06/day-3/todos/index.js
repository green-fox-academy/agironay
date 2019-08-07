const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/todos', (req, res) => {
    res.render('server', {
        todos : ['get up',
            'survive',
            'go back to bed',
        ]
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});