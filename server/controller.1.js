const db = require('../db/model.js');

module.exports = {
  get: (req, res) => {
    // console.log('GEEEETT');
    const { link_id } = req.params;
    // console.log(link_id);
    db.findAll({ where: { link_id } })
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },
  post: (req, res) => {
    const { id, link_id, bed_num, specs, pic, description, cost, stars, ratings_num, favorite, createdAt, updatedAt} = req.body;
    db.create({
      id,
      link_id,
      bed_num,
      specs,
      pic,
      description,
      cost,
      stars,
      ratings_num,
      favorite,
      createdAt,
      updatedAt,
    })
      .then(res.status(201).send("successfully posted"))
  },
  delete: (req,res) => {
    const {id} = req.params;
    db.destroy({
      where: {id} 
    })
      .then(res.status(204).send("successfully deleted"));
  },

  put: (req, res) => {
    // console.log('UPDATE');
    const { id } = req.params;
    db.findOne({ where: { id } })
      .then((data) => {
        if (data.favorite === 1) {
          db.update(
            { favorite: 0 },
            { where: { id } },
          );
        } else {
          db.update(
            { favorite: 1 },
            { where: { id } },
          );
        }
      })
      .then(() => res.status(200).send('success'))
      .catch(err => console.error(err));
  },
};
