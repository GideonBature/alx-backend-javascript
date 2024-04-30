const express = require('express');

const countStudents = require('./3-read_file_async');

const file = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.send('This is the list of our students');
  try {
    const students = await countStudents(file);
    res.send(students);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(1245);

module.exports = app;
