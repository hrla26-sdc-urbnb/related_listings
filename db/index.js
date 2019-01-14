const Sequelize = require('sequelize');

const sequelize = new Sequelize('similar_listings', 'ubuntu', '', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
});

sequelize.authenticate().then((err) => {
  if (err) console.log('Unable to connect to the PostgreSQL database:', err);
  console.log('Connection has been established successfully.');
});

module.exports = sequelize;
