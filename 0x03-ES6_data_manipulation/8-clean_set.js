export default function cleanSet(mySet, startString) {
  let result = ' ';
  for (const el of mySet) {
    if (el.startsWith(startString)) {
      result += `${el.slice(startString.length)}-`;
    }
  }
  result = result.slice(0, -1);
  // eslint-disable-next-line consistent-return
  return result;
}
