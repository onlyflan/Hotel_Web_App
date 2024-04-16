const express = require('express');
const billController = require('../controllers/billController');

const router = express.Router();

router.param('id', billController.checkID);

//create a checkBody middleware
// Check if the body contains the name and the price properties
// If not, send back 400

router
  .route('/')
  .get(billController.getAllbills)
  .post(billController.checkBody, billController.createbill);

router
  .route('/:id')
  .get(billController.getbill)
  .patch(billController.updatebill)
  .delete(billController.deletebill);

module.exports = router;
