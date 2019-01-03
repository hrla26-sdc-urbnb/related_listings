const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const Props = sequelize.define('Properties', {
  link_id: Sequelize.INTEGER,
  bed_num: Sequelize.INTEGER,
  specs: Sequelize.STRING,
  pic: Sequelize.STRING,
  description: Sequelize.STRING,
  cost: Sequelize.STRING,
  stars: Sequelize.INTEGER,
  ratings_num: Sequelize.INTEGER,
  favorite: Sequelize.INTEGER
  
});

Props.sync();

module.exports = Props;

