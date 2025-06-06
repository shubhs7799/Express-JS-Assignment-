const express = require('express');
const app = express();

// Dynamic route using route param (:username) and query param (?role=...)
app.get('/welcome/:username', (req, res) => {
  const { username } = req.params;       // Route parameter
  const { role } = req.query;            // Query parameter

  if (!role) {
    return res.send(`Welcome ${username}, please provide your role using "?role=YourRole"`);
  }

  res.send(`Welcome ${username}, your role is ${role}`);
});

// Start server
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
