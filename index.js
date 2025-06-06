const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the books router
app.use('/books', booksRouter);

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
