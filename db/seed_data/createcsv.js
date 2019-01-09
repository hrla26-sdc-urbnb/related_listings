const fs = require('fs');
const path = require('path');
const faker = require("faker")

const header_string = "id, link_id, bed_num, specs, pic, description, cost, stars, ratings_num, favorite \n"

let writeStream = fs.createWriteStream('data2.csv');

// write some data with a base64 encoding
writeStream.write(header_string);

let bed_nums = [0, 1, 2, 3, 4, 5, 6];
let specs = ["ENTIRE HOUSE", "Studio", "ENTIRE APARTMENT", "ENTIRE CONDOMINIUM", "ENTIRE GUESTHOUSE"];
let pics = [
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/22451-3801987960-718cf41790-o.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/25FLOATING-INYT2-articleLarge.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/28e2f477-ecee-439f-8bee-244037c04a82.c10.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Houseboat.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Key-Projects_Sharma-02-818x545_VSCO-958x559.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Take-a-look-at-Pete-Nelson%E2%80%99s-first-ever-international-treehouse-in-Norway_4.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Upside-Down-Houses-That-Will-Make-You-Look-Twice-courtesy-%40nightrav3n-FT.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/large.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/maxresdefault.jpg",
    "https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/tmg-facebook_social.jpg"
]

let descriptions = [
    'Oceanfront House, Hot Tub, *Best Price on Beach*',
    "Private, Spacious, n Airy Creative",
    "Rose Bowl fan-Private home! Easy access",
    "Silicon Beach Condo 2BD 2BTH - Trendy Playa Vista",
    "Oceanfront House, Hot Tub, *Best Price on Beach*",
    "Bright & Spacious, Renovated Luxurious Townhome",
    "Lush Mediterranean Retreat",
    "Cozy 1 Bedroom apartment",
    "JOEY\'s Place",
    "'The Hydeaway'"
]

let costs = [
    '$625 per night',
    '$272 per night',
    '$320 per night',
    '$563 per night',
    '$625 per night',
    '$573 per night',
    '$427 per night',
    '$229 per night',
    '$354 per night',
    '$191 per night'
]

let stars =[5,4,1,2,4,5,4,3,5];
let ratings_num = [120,56,34,12,11,1,4,27,37,47,53]
let favorites = [0,1,1,0,0,1,0,0,1,1,1,0]

for (let i = 5000000; i<10000000; i++) {
    let row_string = "";

    row_string += `${i}, `;
    row_string +=`${Math.floor(i/10)}, `
    row_string +=`${bed_nums[i%7]}, `
    row_string +=`${specs[i%5]}, `
    row_string +=`${pics[i%10]}, `
    row_string +=`"${descriptions[i%10]}", `
    row_string +=`${costs[i%10]}, `
    row_string +=`${stars[i%9]}, `
    row_string +=`${ratings_num[i%11]}, `
    row_string +=`${favorites[i%12]}`
    row_string += "\n"
    writeStream.write(row_string)
}

// .replace(/,/g, ",")
// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {  
    console.log('wrote all data to file');
});

// close the stream
writeStream.end();  