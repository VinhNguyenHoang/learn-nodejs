const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

// handle HTTP request
app.get('/', (req, res) => {
    console.log('received request');
    res.send('hello world');
})

app.listen(PORT, HOST, () => {
    console.log('starting application at %s:%d', HOST, PORT)
})