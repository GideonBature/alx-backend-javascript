const http = require('http');

const countStudents = require('./3-read_file_async');

const file = process.argv[2];

const app = http.createServer(async(req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    return res.end();
  }
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    try {
      const students = await countStudents(file);
      res.end(`This is the list of our students\n${students}`);
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(1245);

module.exports = app;
