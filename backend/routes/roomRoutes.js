const express = require('express');
const roomController = require('../controllers/roomController');

const router = express.Router();

router.param('id', roomController.checkID);

//create a checkBody middleware
// Check if the body contains the name and the price properties
// If not, send back 400

router
  .route('/')
  .get(roomController.getAllrooms)
  .post(roomController.checkBody, roomController.createroom);

router
  .route('/:id')
  .get(roomController.getroom)
  .patch(roomController.updateroom)
  .delete(roomController.deleteroom);

module.exports = router;
