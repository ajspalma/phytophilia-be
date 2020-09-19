const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const trefleAPIKey = process.env.TREFLE_API_KEY || '';

app.get('/', (req, res) => {
    fetch(`https://trefle.io/api/v1/plants?token=${trefleAPIKey}`)
        .then(response => response.json())
        .then(data => {
            res.send(data);
        });
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});