const express = require('express');

const POST = 8080;
const HOST = '0.0.0.0';

const app = express();

// handle HTTP request /
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(POST, HOST, () => {
    console.log('starting application at %s:%d', HOST, POST)
})