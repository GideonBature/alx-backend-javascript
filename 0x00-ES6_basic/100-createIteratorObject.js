export default function createIteratorObject(report) {
  const employees = [];
  // eslint-disable-next-line guard-for-in
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }
  return employees;
}
