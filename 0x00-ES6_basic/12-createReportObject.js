import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(
  employeesList = createEmployeesObject(),
) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
  return reportObject;
}
