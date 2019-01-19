const Pool = require('pg').Pool

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'similar_listings',
  password: '',
  port: 5432,
});



const getLinkIds = (link_id, response) => {
  const sql_query = 'SELECT * from `properties` WHERE `link_id` = $1';

  pool.query(sql_query, [link_id], (err, data) => {
    if (err) { console.error(err); } else {
      callback(data);
    }
  });
};

// const getAllMenuItems = function (rest_id, callback) {
//   const sql_query = 'SELECT * from `menus` WHERE `rest_id` = ?';
//   connection.query(sql_query, rest_id, (err, data) => {
//     if (err) { console.error(err); } else {
//       callback(data);
//     }
//   });
// };

module.exports = {
  getLinkIds,
};
