const express = require('express');
const app = express();
const port = 8888;

const petList = require('./pets.json').pets; // Since there's only one property, anyway.

app.use(express.static('public'));


app.get('/', function (req, res) {
    // res.send('<h1>Yo, this is a great response.</h1>');
    res.send({
        "pets": petList.map(pet => ({
            "name": pet.name
        }))
    });
});

app.get('/pet/:id', (req, res) => {
    let id = req.params.id;
    if (id && id < petList.length) {
        res.send(petList[id]);
    } else {
        res.status(404).send({
            "error": "Pet not found."
        });
    }
});

app.listen(port, function () {
    console.log("Server is now up on " + port);
});