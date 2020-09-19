const { port, trefleKey } = require('./config')
const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/', (req, res) => {
    fetch(`https://trefle.io/api/v1/plants?token=${trefleKey}`)
        .then(response => response.json())
        .then(data => {
            res.send(data);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});