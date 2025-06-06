const express = require('express');
const app = express();

// === Logging Middleware ===
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// === Products Routes ===
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// === Categories Routes ===
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// === Wildcard Route for 404 ===
app.all('/:any', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// === Start Server ===
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
