import createReportObject from './12-createReportObject';

export default function createIteratorObject(report = createIteratorObject) {
  for (const element of Object.keys(report)) {
    console.log(element);
  }
}
