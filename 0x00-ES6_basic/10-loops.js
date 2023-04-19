export default function appendToEachArrayValue(array, appendString) {
  const count = [];
  for (const idx of array) {
    count.push(`${appendString + idx}`);
  }

  return count;
}
