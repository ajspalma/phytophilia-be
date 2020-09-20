const { port, trefleKey } = require('./config')
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Run cors through the express middleware to allow CORS
app.use(cors());

app.get('/', (req, res) => {
    fetch(`https://trefle.io/api/v1/plants?token=${trefleKey}&order[common_name]=asc`)
        .then(response => response.json())
        .then(data => {
            res.send(data);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});