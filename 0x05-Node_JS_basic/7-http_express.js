const express = require('express');

const countStudents = require('./3-read_file_async');

const file = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students');
  try {
    await countStudents(file);
    res.end();
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(1245);

module.exports = app;
