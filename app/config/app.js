const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://db:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
//app.set('view engine', 'ejs');

// Set up routes
app.use('/', userRoutes);
module.exports = app;

