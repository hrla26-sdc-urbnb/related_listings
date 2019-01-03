const props = require('../model.js');

function seed() {
  let demi_data = [];    
    for( var i = 11111; i < 11122; i++){
            let temp = [];
            demi_data.push({
            link_id: i,
            bed_num: 5,
            specs: 'ENTIRE HOUSE',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/22451-3801987960-718cf41790-o.jpg',
            description: 'Oceanfront House, Hot Tub, *Best Price on Beach*',
            cost: '$625 per night',
            stars: 5,
            ratings_num: 90,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 4,
            specs: 'Studio',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/25FLOATING-INYT2-articleLarge.jpg',
            description: 'Private, Spacious, n Airy Creative',
            cost: '$272 per night',
            stars: 4,
            ratings_num: 2,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 2,
            specs: 'ENTIRE APARTMENT',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/28e2f477-ecee-439f-8bee-244037c04a82.c10.jpg',
            description: 'Rose Bowl fan-Private home! Easy access',
            cost: '$320 per night',
            stars: 3,
            ratings_num: 9,
            favorite: 0
            },
        {
            link_id: i,
            bed_num: 2,
            specs: 'ENTIRE CONDOMINIUM',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Houseboat.jpg',
            description: 'Silicon Beach Condo 2BD 2BTH - Trendy Playa Vista',
            cost: '$563 per night',
            stars: 4,
            ratings_num: 76,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 5,
            specs: 'ENTIRE HOUSE',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Key-Projects_Sharma-02-818x545_VSCO-958x559.jpg',
            description: 'Oceanfront House, Hot Tub, *Best Price on Beach*',
            cost: '$625 per night',
            stars: 2,
            ratings_num: 90,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 5,
            specs: 'ENTIRE HOUSE',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Take-a-look-at-Pete-Nelson%E2%80%99s-first-ever-international-treehouse-in-Norway_4.jpg',
            description: 'Bright & Spacious, Renovated Luxurious Townhome',
            cost: '$573 per night',
            stars: 4,
            ratings_num: 7,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 5,
            specs: 'ENTIRE HOUSE',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/Upside-Down-Houses-That-Will-Make-You-Look-Twice-courtesy-%40nightrav3n-FT.jpg',
            description: 'Lush Mediterranean Retreat',
            cost: '$427 per night',
            stars: 5,
            ratings_num: 79,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 1,
            specs: 'ENTIRE APARTMENT',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/large.jpg',
            description: 'Cozy 1 Bedroom apartment',
            cost: '$229 per night',
            stars: 5,
            ratings_num: 55,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 1,
            specs: 'ENTIRE GUESTHOUSE',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/maxresdefault.jpg',
            description: 'JOEY\'s Place',
            cost: '$354 per night',
            stars: 5,
            ratings_num: 6,
            favorite: 0
        },
        {
            link_id: i,
            bed_num: 3,
            specs: 'ENTIRE HOUSE',
            pic: 'https://s3-us-west-1.amazonaws.com/similar-listings-targaryen/tmg-facebook_social.jpg',
            description: 'The Hydeaway',
            cost: '$191 per night',
            stars: 5,
            ratings_num: 56,
            favorite: 0
        });
    }
    return demi_data;
}

let insert_data = seed();

function insertData(array) {
  for(let i = 0; i < array.length; i++){
    props.create(
      array[i]
    )      
  }    
}

insertData(insert_data);