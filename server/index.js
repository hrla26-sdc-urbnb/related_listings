// const http = require('http');
// const app = require('./app');
// const db = require('../db');

// const port = 4000;
// const server = http.createServer(app);

// server.listen(port, () => console.log('listening on port', port));

const http = require('http');
const {pid} = process;
const port = 4000;
const app = require('./app');


// http.createServer((req, res) => {
//   for (let i=0; i<1e7; i++); // simulate CPU work
//   res.end(`Handled by process ${pid}`);
// }).listen(port, () => {
//   console.log(`Started process ${pid}`);
// });

http.createServer(app).listen(port, () => {
    console.log(`Started process ${pid} on port ${port}`);
  });