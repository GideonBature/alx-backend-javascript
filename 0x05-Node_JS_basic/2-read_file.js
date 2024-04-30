const fs = require('fs');

const countStudents = (path) => {
  try {
    const csvData = fs.readFileSync(path, 'utf8');
    const rows = csvData.split('\n');
    const cols = rows.map((row) => row.split(','));
    const data = cols.slice(1, -1);

    const numberOfStudents = data.length;
    const csStudentsName = [];
    const sweStudentsName = [];

    for (const row of data) {
      if (row[3] === 'CS') {
        csStudentsName.push(row[0]);
      } else if (row[3] === 'SWE') {
        sweStudentsName.push(row[0]);
      }
    }
    console.log(`Number of students: ${numberOfStudents}`);
    console.log(`Number of students in CS: ${csStudentsName.length}. List: ${csStudentsName.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudentsName.length}. List: ${sweStudentsName.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
