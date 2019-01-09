const fs = require('fs');
const path = require('path');
const faker = require("faker")

const header_string = '"link_id", "bed_num", "specs", "pic", "description", "cost", "stars", "ratings_num", "favorite"'

let writeStream = fs.createWriteStream('example.csv');

// write some data with a base64 encoding
writeStream.write(header_string);

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {  
    console.log('wrote all data to file');
});

// close the stream
writeStream.end();  