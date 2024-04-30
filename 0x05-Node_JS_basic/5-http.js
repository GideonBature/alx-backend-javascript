const http = require('http');

const countStudents = require('./3-read_file_async');

const file = process.argv[2];

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    return res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(file);
      return res.end(`${students.join('\n')}`);
    } catch (err) {
      res.end(err.message);
    }
  }
  res.end();
});

app.listen(1245);

module.exports = app;
