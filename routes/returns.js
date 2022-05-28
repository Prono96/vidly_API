const express = require('express');
const router = express.Router();

router.post('/api/return', async (req, res) => {
  if(!req.body.customerId) return res.status(400).send('customerId not found')

 const returns = res.status(401).send('UNAUTHORISE');
});

module.exports = router;