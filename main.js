const http = require('http');
require('dotenv').config();

const { getProducts } = require('./controllers/main')

const PORT = process.env.PORT || 1234;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
        return
    }

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ error: "route not found"}))
    return
})

server.listen(PORT, () => console.log(`server running at ${HOST}:${PORT}`))