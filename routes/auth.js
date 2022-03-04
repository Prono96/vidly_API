const jwt = require('jsonwebtoken');
const config = require('config'); 
const Joi = require('Joi');
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const _ = require('lodash');

const express = require('express');
const router = express.Router();


// Post a user 
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne( {email: req.body.email} );
  if(!user) res.status(400).send('invalid email or password');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword) res.status(400).send('invalid email or paswword');

  const token = user.generateAuthToken();
  res.send(token);
  console.log("you are logged in already")
});

// Validation function 
function validate(req) {
  const schema = {
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  };

  return Joi.validate(req, schema);
}

module.exports = router;