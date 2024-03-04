export default function createReportObject(employeesList) {
  return {

    allEmployees: employeesList,

    getNumberOfDepartments(allEmployees) {
      let count = 0;

      // eslint-disable-next-line guard-for-in, no-unused-vars
      for (const department in allEmployees) {
        count += 1;
      }

      return count;
    },
  };
}
