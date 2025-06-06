const express = require('express');
const path = require('path');

const app = express();
app.use(express.json()); // to parse JSON data

// Serve form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEW', 'form.html'));
});

// Handle product submission
app.post('/api/products', (req, res) => {
  const product = req.body;
  console.log("Received product:", product); // log to server
  res.json(product); // send back to client
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
