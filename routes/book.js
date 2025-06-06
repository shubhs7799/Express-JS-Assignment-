const express = require('express');
const router = express.Router();

// GET /books
router.get('/', (req, res) => {
  console.log('GET request to /books');
  res.send('Here is the list of books!');
});

// POST /books
router.post('/', (req, res) => {
  const bookData = req.body;
  console.log('POST request to /books with data:', bookData);
  res.send('Book has been added!');
});

module.exports = router;
