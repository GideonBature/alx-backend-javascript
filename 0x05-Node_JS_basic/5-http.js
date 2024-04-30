const http = require('http');

const countStudents = require('./3-read_file_async');

const file = process.argv[2];

const app = http.createServer(async(req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    return res.end();
  }
  if (req.url === '/students') {
    try {
      const students = await countStudents(file);
      res.write(`This is the list of our students\n${students}`);
      return res.end();
    } catch (err) {
      return res.end(err.message);
    }
  }
});

app.listen(1245);

module.exports = app;
