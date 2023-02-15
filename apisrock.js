const express = require('express');
const fs = require('fs');
const app = express();

const port = 8080;
const db = fs.openSync('apisrock.db', 'a+');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Yo, dude!');
});

app.post('/chat', (req, res) => {
    console.log(req);
    res.send('NADA');
});

app.listen(port, () => console.log('Up on ' + port));
