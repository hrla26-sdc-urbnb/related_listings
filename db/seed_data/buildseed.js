const dateFns = require('date-fns');
const fs = require('fs');
const path = require('path');

let sql = `
DROP DATABASE IF EXISTS similar_listings;
CREATE DATABASE similar_listings;
USE Properties;
`;


sql += `
/* ================================== Properties ================================== */
CREATE TABLE Properties (
  id INT AUTO_INCREMENT,
  link_id INT,
  bed_num INT,
  specs VARCHAR(255),
  pic: VARCHAR(255),
  description: VARCHAR(255),
  cost: VARCHAR(255),
  stars: INT,
  ratings_num: INT,
  favorite: INT,
  PRIMARY KEY(id)
);\n
`;

"link_id: Sequelize.INTEGER,
bed_num: Sequelize.INTEGER,
specs: Sequelize.STRING,
pic: Sequelize.STRING,
description: Sequelize.STRING,
cost: Sequelize.STRING,
stars: Sequelize.INTEGER,
ratings_num: Sequelize.INTEGER,
favorite: Sequelize.INTEGER"
const restaurants = ['Bestia', 'Republique', 'Patina', 'Wolf and Crane', 'WurstKuche', 'Spitz', 'Marugame Monzo', 'Daikokuya', 'Red Wheelbarrow', 'Buffalo Wild Wings'];

const getInsertForRestaurants = restaurant => (
  `INSERT INTO restaurants (restaurant_name) VALUES ("${restaurant}");`
);

for (let i = 0; i < restaurants.length; i += 1) {
  sql += `${getInsertForRestaurants(restaurants[i])}\n`;
}

sql += `
/* ================================== users  ================================== */
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(255),
  user_initials VARCHAR(2),
  user_city VARCHAR(255),
  PRIMARY KEY(id)
);\n
`;

const getRandomElement = arr => (
  arr[Math.floor(Math.random() * arr.length)]
);

const usernames = ['mhan01', 'jcool00', 'koolaidman', 'coolguy30', 'foodlady21', 'restaurantgirl30', 'opentableperson99', 'tableitdude70', 'carla', 'guy', 'kakashi', 'naruto', 'goku', 'clarkkent', 'bobloblaw', 'michaelscott', 'jimhalpert', 'pambeesly', 'tobyflenderson', 'larrydavid', 'allmight', 'onepunchman29', 'fullmetal70', 'OpenTableDiner', 'georgemichael', 'TBone', 'Lucille2', 'KevinMalone', 'TPacker', 'dschrute'];
const initials = ['MH', 'LH', 'JK', 'ML', 'JH', 'AH', 'HM', 'FT', 'LO', 'ZL', 'DK', 'DM', 'PM', 'SE', 'TY', 'TG', 'CM', 'WM', 'QA', 'AB', 'PS'];
const cities = ['New York', 'Los Angeles', 'Beverly Hills', 'San Francisco', 'Houston', 'Austin', 'San Diego', 'Chicago', 'Boston', 'Santa Barbara'];

const getInsertForUsers = (username) => {
  const initial = getRandomElement(initials);
  const city = getRandomElement(cities);

  return `INSERT INTO users (username, user_initials, user_city) VALUES ("${username}", "${initial}", "${city}");`;
};

for (let i = 0; i < usernames.length; i += 1) {
  const username = usernames[i];
  sql += `${getInsertForUsers(username)}\n`;
}

sql += `
/* ================================== review_filters ================================== */
CREATE TABLE review_filters (
  id INT AUTO_INCREMENT,
  restaurant_id INT,
  review_filter VARCHAR(55),
  PRIMARY KEY(id)
);\n
`;

const filters = ['Burgers', 'Burritos', 'Pizzas', 'Tacos', 'Sandwiches'];

const getInsertForReviewFilters = (restaurantId, filter) => (
  `INSERT INTO review_filters (restaurant_id, review_filter) VALUES (${restaurantId}, "${filter}");`
);

for (let i = 1; i <= restaurants.length; i += 1) {
  for (let j = 0; j < filters.length; j += 1) {
    sql += `${getInsertForReviewFilters(i, filters[j])}\n`;
  }
}

sql += `
/* ================================== reviews_detail ================================== */
CREATE TABLE reviews_detail (
  id INT AUTO_INCREMENT,
  restaurant_id INT,
  user_id INT,
  review_text TEXT,
  overall_score INT,
  food_score INT,
  service_score INT,
  ambience_score INT,
  value_score INT,
  would_recommend BOOLEAN,
  dined_on_date DATE,
  PRIMARY KEY(id)
);\n
`;

const foods = ['chicken tacos', 'beef tacos', 'cheeseburgers', 'hamburgers', 'buffalo burgers', 'carne asada burritos', 'chicken burritos', 'beef burritos', 'burritos', 'monster nachos', 'appetizers', 'cuban sandwiches', 'tri tip sandwiches', 'sandwiches', 'carne asada fries', 'soups', 'pepperoni pizzas', 'kale salads', 'quinoa salads', 'strawberry smoothies', 'milkshakes', 'fried chicken wings', 'roast chicken', 'shawarmas'];
const adverbs = ['pretty', 'honestly', 'frankly', 'ridiculously', 'ludicrously', 'soooo', 'frking', 'effing', 'like insanely', '...', 'unbelievably', 'undeniably', 'just plain'];
const intros = ['Came here a while ago, and', 'We came here for dinner one night and', 'Stopped by for a bite...', 'Came here for my last birthday, and', 'Grabbed lunch here a while ago, and', 'Came on a weekday and'];
const posAdjectives = ['awesome', 'lit', 'delicious', 'good', 'great', 'amazing', 'life-affirming', 'life-changing', 'unstoppable', 'un-freaking-believable', 'underrated'];
const neutralAdjectives = ['decent', 'okay', 'whatever', 'nothing special', 'alright', 'pretty good', 'good, not great', 'meh'];
const negAdjectives = ['terrible', 'disgusting', 'bad', 'cringe-worthy', 'overrated', 'abysmal', 'yuck'];
const posSentences = ['I LOVE THIS PLACE!', 'Omg it was so good.', 'Definitely going back.', 'Going back ASAP!', 'Top ten in LA for sure.', 'Best I\'ve ever had.', 'Top five hands down.', 'I loved it.', 'My new favorite spot.', 'It was so memorable!'];
const negSentences = ['Never going back!', 'Would NOT recommend', 'DO NOT GO HERE!', 'This place sucks!', 'I honestly can\'t believe this place is still in business', 'Overall terrible'];
const posHashtags = ['#lit', '#fire', '#tasty', '#la', '#worldclass', '#elite', '#ontopoftheworld', '#thisishowwedoit', '#cantstopwontstop', '#yeet', '#bitconneeeeect', '#money', '#cashmoney'];
const negHashtags = ['#overrated', '#nomegusta', '#neveragain', '#notgoingback', '#why', '#regrets'];

const getComment = (type) => {
  const intro = getRandomElement(intros);
  const food = getRandomElement(foods);
  const adverb = getRandomElement(adverbs);
  const longComment = Math.random() < 0.2;
  if (type === 'positive') {
    const adjective = getRandomElement(posAdjectives);
    const hashtag = Math.random() < 0.2 ? getRandomElement(posHashtags) : '';

    let comment = '';
    comment += `${intro} the ${food} are ${adverb} ${adjective}!`;
    for (let i = 0; i < (longComment ? 10 : 1); i += 1) { comment += ` ${getRandomElement(posSentences)}`; }
    comment += hashtag;

    return comment;
  }

  if (type === 'negative') {
    const adjective = getRandomElement(negAdjectives);
    const hashtag = Math.random() < 0.2 ? getRandomElement(negHashtags) : '';

    let comment = '';
    comment += `${intro} the ${food} are ${adverb} ${adjective}!`;
    for (let i = 0; i < (longComment ? 10 : 1); i += 1) { comment += ` ${getRandomElement(negSentences)}`; }
    comment += hashtag;

    return comment;
  }

  if (type === 'neutral') {
    const adjective = getRandomElement(neutralAdjectives);
    return `${intro} the ${food} are ${adjective}`;
  }
};

const getRandomDate = () => {
  const start = new Date(2016, 0, 1);
  const now = new Date();
  return new Date(start.getTime() + Math.random() * (now.getTime() - start.getTime()));
};

const getInsertForReviewsDetail = () => {
  const restaurantId = Math.floor(Math.random() * 10) + 1;
  const userId = Math.floor(Math.random() * 25) + 1;
  const overallScore = Math.min(10 + (Math.floor(Math.random() * 18) - 9), 5);
  const foodScore = Math.max(Math.min(overallScore + Math.floor(Math.random() * 3) - 1, 5), 1);
  const serviceScore = Math.max(Math.min(overallScore + Math.floor(Math.random() * 3) - 1, 5), 1);
  const ambienceScore = Math.max(Math.min(overallScore + Math.floor(Math.random() * 3) - 1, 5), 1);
  const valueScore = Math.max(Math.min(overallScore + Math.floor(Math.random() * 3) - 1, 5), 1);
  const wouldRecommend = overallScore >= 3 ? 1 : 0;
  const dinedOnDate = `"${dateFns.format(getRandomDate(), 'YYYY-MM-DD')}"`;
  let reviewText;
  if (overallScore < 3) {
    reviewText = `"${getComment('negative')}"`;
  } else if (overallScore === 3) {
    reviewText = `"${getComment('neutral')}"`;
  } else {
    reviewText = `"${getComment('positive')}"`;
  }

  const sqlParams = [
    restaurantId,
    userId,
    overallScore,
    foodScore,
    serviceScore,
    ambienceScore,
    valueScore,
    wouldRecommend,
    dinedOnDate,
    reviewText,
  ];

  return `INSERT INTO reviews_detail (restaurant_id, user_id, overall_score, food_score, service_score, ambience_score, value_score, would_recommend, dined_on_date, review_text) VALUES (${[...sqlParams].join(', ')});`;
};

for (let i = 0; i < 1000; i += 1) {
  sql += `${getInsertForReviewsDetail()}\n`;
}

sql += `
/* ================================== reviews_summary ================================== */
CREATE VIEW reviews_summary AS 
SELECT
  restaurant_id,
  COUNT(*) total_reviews,
  CAST(AVG(overall_score) AS DECIMAL(2,1)) avg_overall,
  CAST(AVG(food_score) AS DECIMAL(2,1)) avg_food,
  CAST(AVG(service_score) AS DECIMAL(2,1)) avg_service,
  CAST(AVG(ambience_score) AS DECIMAL(2,1)) avg_ambience,
  CAST(AVG(value_score) AS DECIMAL(2,1)) avg_value,
  SUM(would_recommend) / COUNT(*) pct_recommend,
  "${filters[0]}" review_filter_1,
  "${filters[1]}" review_filter_2,
  "${filters[2]}" review_filter_3,
  "${filters[3]}" review_filter_4,
  "${filters[4]}" review_filter_5,
  'Sauces' loved_for_1,
  'Wine' loved_for_2,
  'Moderate' noise_level
FROM reviews_detail
GROUP BY 1;
`;


fs.writeFile(path.join(__dirname, 'seed.sql'), sql, (err) => {
  if (err) { console.error(err); }
});