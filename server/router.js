const router = require('express').Router();
const cont = require('./controller.js');

router
  .route('/:link_id')
  .get(cont.get);
  
router
  .route('/:id')
  .put(cont.reset);

module.exports = router;