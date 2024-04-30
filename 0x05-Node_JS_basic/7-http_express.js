const express = require('express');

const countStudents = require('./3-read_file_async');

const file = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(file)
    .then((message) => {
      res.send(`This is the list of our students\n${message}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
