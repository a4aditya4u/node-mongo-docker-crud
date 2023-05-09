const User = require('../models/user');

// Create a new user
exports.createUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save((err,user) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.status(200).send(user);
  });
};

// Get all users
exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.status(200).send(users);
  });
};

// Get a single user by ID
exports.getUserById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.status(200).send(user);
  });
};

// Update a user by ID
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.status(200).send(user);

  });
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id, (err,user) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.status(200).send(user);

  });
};
