const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.param('id', clientController.checkID);

//create a checkBody middleware
// Check if the body contains the name and the price properties
// If not, send back 400

router
  .route('/')
  .get(clientController.getAllclients)
  .post(clientController.checkBody, clientController.createclient);

router
  .route('/:id')
  .get(clientController.getclient)
  .patch(clientController.updateclient)
  .delete(clientController.deleteclient);

module.exports = router;
