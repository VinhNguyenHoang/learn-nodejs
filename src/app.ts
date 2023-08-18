import http = require('http');
import 'dotenv/config';

// import * as c from './controllers/main';
import { HandleRouting  } from './router/handler';

const PORT = process.env.PORT || 1234;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
    HandleRouting(req, res)
    // if (req.url === '/api/products' && req.method === 'GET') {
    //     c.getProducts(req, res)
    //     return
    // }

    return
})

server.listen(PORT, () => console.log(`server running at ${HOST}:${PORT}`))