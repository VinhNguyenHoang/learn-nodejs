import http = require('http');
import 'dotenv/config';

import { router  } from './router/handler';
import { Application } from './app';

// need to import it to execute codes in this file
import './controllers/main';

const PORT = process.env.PORT || 1234;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
    router.HandleRouting(req, res)

    return
})

server.listen(PORT, () => console.log(`server running at ${HOST}:${PORT}`))