const express = require('express');
const app = express();
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

// Home route
app.get('/', (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Use routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// 404 handler (catch-all)
app.all('/:any', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
