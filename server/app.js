require('newrelic');
const express = require('express');
const path = require('path');
// const db = require('../db/index.1.js');
const parse = require('body-parser');
const router = require('./router.js');
const cors = require('cors');


const app = express();

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/loaderio-f3929ec5e029861abcafea0e45c74b0c.txt', function(req, res) {
    res.sendFile("/home/ubuntu/related_listings/client/dist/loaderio-f3929ec5e029861abcafea0e45c74b0c.txt");
});

// app.get('/api/:link_id', (req, res) => {
//     db.getLinkIds(req.params["link_id"], (data) => res.status(200).send(data));
// });

app.use('/api', router);

module.exports = app;