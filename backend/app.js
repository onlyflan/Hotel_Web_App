const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const hotelRouter = require('./routes/hotelRoutes');
// const roomRouter = require('./routes/roomRoutes');
// const clientRouter = require('./routes/clientRoutes');
// const serviceRouter = require('./routes/serviceRoutes');
// const billRouter = require('./routes/billRoutes');

const app = express();

// 1) MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // logs HTTP requests details to the console in a nice and readable format
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users', hotelRouter);
// app.use('/api/v1/users', roomRouter);
// app.use('/api/v1/users', clientRouter);
// app.use('/api/v1/users', serviceRouter);
// app.use('/api/v1/users', billRouter);

module.exports = app;
