export default function createIteratorObject(report) {
  const employeesArray = [];

  for (const employeeGroup of Object.values(report.allEmployees)) {
    employeesArray.push(...employeeGroup);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employeesArray.length) {
            // eslint-disable-next-line no-plusplus
            return { value: employeesArray[index++], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
