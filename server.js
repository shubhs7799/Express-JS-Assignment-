const express = require('express');
const app = express();

// Import all routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.json());

// Register routes
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
