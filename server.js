const express = require('express');
const app = express();
const PORT = 4000;

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Middleware (optional: use express.json() if you plan to receive JSON in body)
app.use(express.json());

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Default route
app.get('/', (req, res) => {
  res.send("Welcome to the API");
});

// 404 handler
app.all('/:any', (req, res) => {
  res.status(404).send("404 - Route Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
