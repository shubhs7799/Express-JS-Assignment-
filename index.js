const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes'); // import router

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// Mount all /products and /categories routes
app.use('/', apiRoutes);

// 404 Wildcard Route
app.all('/:any', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
