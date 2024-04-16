const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`),
);

exports.checkID = (req, res, next, val) => {
  console.log(`User id is: ${val}`);

  if (req.params.id * 1 > users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllUsers = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: users.length,
    data: { users },
  });
};

exports.getUser = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  console.log(req.body);

  const newID = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newID }, req.body);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    },
  );
};

exports.updateUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: {
      user: '<Updated user here...>',
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
