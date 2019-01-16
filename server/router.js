const router = require('express').Router();
const cont = require('./controller.js');

router
  .route("/")
  .post(cont.post);

router
  .route('/:link_id')
  .get(cont.get);
  
router
  .route('/:id')
  .put(cont.put)
  .delete(cont.delete);

module.exports = router;