const express = require('express');
const path = require('path');
const parse = require('body-parser');
const router = require('./router.js');

const app = express();

app.use(parse.json());
app.use(parse.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'../client/dist')));

app.use('/api/', router);

module.exports = app;