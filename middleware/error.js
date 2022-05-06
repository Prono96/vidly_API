const winston = require('winston');

function error (err, req, res, next) {

  winston.error(err.message, err);
  res.status(500).send('Something failed....');
}


<<<<<<< HEAD
=======
module.exports = error;
>>>>>>> 877c042... performed unit testing using jest npm
