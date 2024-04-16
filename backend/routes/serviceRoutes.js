const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.param('id', serviceController.checkID);

//create a checkBody middleware
// Check if the body contains the name and the price properties
// If not, send back 400

router
  .route('/')
  .get(serviceController.getAllservices)
  .post(serviceController.checkBody, serviceController.createservice);

router
  .route('/:id')
  .get(serviceController.getservice)
  .patch(serviceController.updateservice)
  .delete(serviceController.deleteservice);

module.exports = router;
