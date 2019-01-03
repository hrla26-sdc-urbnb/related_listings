const db = require("../db/model.js");

module.exports = {
  get: (req, res) => {
    console.log('GEEEETT');
    let {link_id} = req.params;
    db.findAll({where: {link_id}})
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err)); 
  },
  reset: (req, res) => {
    console.log('UPDATE');
    let {id} = req.params;
    db.findOne({where: {id}})
      .then((data) => {
        if(data.favorite === 1){
          db.update(
            {favorite: 0},
            {where: {id}}
          );  
        } else {
          db.update(
            {favorite: 1},
            {where: {id}}
          );
        }   
      })
      .then(() => res.status(200).send('success'))
      .catch(err => console.error(err)); 
  }
}