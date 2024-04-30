const readDataBase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        const data = await readDataBase('./data.json');
        res.status(200).send(data);
    }
}