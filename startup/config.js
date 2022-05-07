const config = require('config');

function configuration() {

  if(config.has('jwtPrivatekey')) {
  throw new Error('FATAL ERROR: jwtPrivateKey is not found');
  }
  
}

module.exports = configuration; 