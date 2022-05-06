const mongoose = require('mongoose');
const winston = require('winston');


function db_startup() {

  mongoose.connect('mongodb://localhost/vidly', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => winston.info('Connected to MongoDB...'))
}

module.exports = db_startup;