const fs = require('fs');

const hotels = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/hotels.json`),
);

exports.checkID = (req, res, next, val) => {
  console.log(`hotel id is: ${val}`);

  if (req.params.id * 1 > hotels.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};
// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price',
//     });
//   }
//   next();
// };

exports.getAllHotels = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: hotels.length,
    data: { hotels },
  });
};

exports.getHotel = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      hotels,
    },
  });
};

exports.createHotel = (req, res) => {
  // console.log(req.body);

  const newID = hotels[hotels.length - 1].id + 1;
  const newHotel = Object.assign({ id: newID }, req.body);

  hotels.push(newHotel);

  fs.writeFile(
    `${__dirname}/dev-data/data/hotels.json`,
    JSON.stringify(hotels),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          hotel: newHotel,
        },
      });
    },
  );
};

exports.updateHotel = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: {
      hotel: '<Updated hotel here...>',
    },
  });
};

exports.deleteHotel = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
