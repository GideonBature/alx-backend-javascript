const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
        const fieldCounts = {};
        const studentData = lines.slice(1);
        studentData.forEach((line) => {
          const fields = line.split(',');
          const firstname = fields[0];
          const field = fields[3];
          if (fieldCounts[field]) {
            fieldCounts[field].push(firstname);
          } else {
            fieldCounts[field] = [firstname];
          }
        });
        resolve(fieldCounts);
      }
    });
  });
}

module.exports = readDatabase;
