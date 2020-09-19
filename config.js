const dotenv = require('dotenv');

// parse .env file to load custom environment variables 
dotenv.config();

module.exports = {
    port: process.env.PORT || '3000',
    trefleKey: process.env.TREFLE_API_KEY || ''
};