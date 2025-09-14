const express = require('express');
const router = express.Router();


// Test endpoint
router.get('/test', (req, res) => {
  res.json({
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    query: req.query
  });
});


module.exports = router;