const express = require('express');
const path = require('path');
const app = express();

// GET endpoint to serve HTML file
app.get('/api/products', (req, res) => {
  console.log("Fetching All Products");
  res.sendFile(path.join(__dirname, 'VIEW', 'index.html'));
});

// Optional: basic root route
app.get('/', (req, res) => {
  res.send('Home Page');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
