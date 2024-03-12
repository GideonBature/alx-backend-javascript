export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const matchStudentId = newGrades.find((grade) => obj.id === grade.studentId);

      if (matchStudentId) {
        // eslint-disable-next-line no-param-reassign
        obj.grade = matchStudentId.grade;
      } else {
        // eslint-disable-next-line no-param-reassign
        obj.grade = 'N/A';
      }
      return obj;
    });
}
