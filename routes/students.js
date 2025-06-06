const express = require('express');
const router = express.Router();
const { students } = require('../data/data');

// GET /students
router.get('/', (req, res) => {
  const names = students.map(s => s.name).join(', ');
  res.send(`Students: ${names}`);
});

// GET /students/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.send('Student not found');
  }
});

module.exports = router;
