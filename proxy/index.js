const express = require('express');
const path = require('path');
const parser = require('body-parser');


const port = 5000;
const server = express();

server.use(parser.json());
server.use(parser.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './public/')));

server.listen(port, () => console.log('successfully listening on port ', port));

/*
var express = require('express')
var proxy = require('http-proxy-middleware')

var app = express()

app.use('/api', proxy({ target: 'http://www.example.org', changeOrigin: true }))
app.listen(3000)
*/
