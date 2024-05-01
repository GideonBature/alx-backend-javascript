const readDatabase = require('../utils');

const file = process.argv[2];

class StudentsController {
  static getStudents(req, res) {
    readDatabase(file)
      .then((student) => {
        const rep = ['This is the list of our students'];
        Object.keys(student).sort().forEach((key) => {
          rep.push(`Number of students in ${key}: ${student[key].length}. List: ${student[key].join(', ')}`);
        });
        res.status(200).send(rep.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (['CS', 'SWE'].includes(major)) {
      readDatabase(file)
        .then((student) => {
          const rep = [];
          student[major].forEach((firstname) => {
            rep.push(firstname);
          });
          res.status(200).send(`List: ${rep.join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
