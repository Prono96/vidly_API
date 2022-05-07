const winston = require('winston');
// require('winston-mongodb');
require('express-async-errors');

// const winston = require('winston-mongodb');


function loggin() {

  // USE PROMISE TO PERFORM UNHANDLED REJECTION 
  // const p = Promise.reject(new Error('Something went wrong.....but you are still in nodejs'));
  // p.then(() => console.log('You are logged in'));

// throw new Error ('Something went wrong before the app startup');
  process.on('uncaughtException', (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });
  
  // winston.handleExeceptions(
  //   new winston.transports.Console({ colorize: true, prettyprint: true}),
  //   new winston.transports.File({filename: 'uncaughtExecptions.log'}));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  })
  
  winston.add(winston.transports.File, { filename: 'logfile.log'} );
  // winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/vidly'});
}

module.exports = loggin;