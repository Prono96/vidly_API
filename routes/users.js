const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const _ = require('lodash');

const express = require('express');
const router = express.Router();

// Get all users 
router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

// Post a user 
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne( {email: req.body.email} );
  if(user) res.status(400).send('This user already exist in our database');

  user = new User (_.pick(req.body, ['name', 'password', 'email']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send( _.pick(user, ['name', 'email']));
  console.log('User has been added');
});

// Delete a user 
router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
  console.log(user);
});

module.exports = router;