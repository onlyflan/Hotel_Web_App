const express = require('express');
const hotelController = require('../controllers/hotelController');

const router = express.Router();

router.param('id', hotelController.checkID);

//create a checkBody middleware
// Check if the body contains the name and the price properties
// If not, send back 400

router
  .route('/')
  .get(hotelController.getAllHotels)
  .post(hotelController.checkBody, hotelController.createHotel);

router
  .route('/:id')
  .get(hotelController.getHotel)
  .patch(hotelController.updateHotel)
  .delete(hotelController.deleteHotel);

module.exports = router;
