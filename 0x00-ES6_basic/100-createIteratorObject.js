export default function createIteratorObject(report) {
  const thearray = [];
  for (const item of Object.values(report.allEmployees)) {
    thearray.push(...item);
  }

  const index = 0;

  return {
    next() {
      if (index < thearray.length) {
        return { value: thearray[index], done: false };
      }
      return { done: true };
    },
  };
}
