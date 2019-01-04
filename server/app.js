const express = require('express');
const path = require('path');
const parse = require('body-parser');
const router = require('./router.js');
const cors = require('cors');


const app = express();

app.use(parse.json());
app.use(parse.urlencoded({extended:true}));

// var whitelist = ['http://localhost/:5000', `http://localhost/:4000`];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.use(cors());

app.use(express.static(path.join(__dirname,'../client/dist')));

app.use('/api', router);

module.exports = app;