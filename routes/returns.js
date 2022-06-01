const express = require('express');
const { Rental } = require('../models/rental');
const router = express.Router();

router.post('/api/return', async (req, res) => {
  if(!req.body.customerId) return res.status(400).send('customerId not found');
  if(rental.dateReturned) return res.status(400).send('Rental is being processed');

 const returns = res.status(401).send('UNAUTHORISE');
});

module.exports = router;