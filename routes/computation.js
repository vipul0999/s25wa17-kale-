const express = require('express');
const router = express.Router();

// Helper function to generate a random value or use query param
const getValue = (req) => {
  return req.query.x ? parseFloat(req.query.x) : (Math.random() * 100).toFixed(2);
};

router.get('/', (req, res) => {
  const x = getValue(req);  // Use query param or random value
  const result = Math.cos(x);
  res.send(`Math.cos() applied to ${x} is ${result}`);
});

module.exports = router;
