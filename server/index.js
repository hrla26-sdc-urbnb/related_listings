const http = require('http');
const app = require('./app');
const db = require('../db/index.js');

const port = 3000;
const server = http.createServer(app);

server.listen(port, () => console.log('listening on port', port));