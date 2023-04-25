export default function getListStudentIds(myArray) {
  if (!Array.isArray(myArray)) {
    return [];
  }
  const results = myArray.map((element) => element.id);
  return results;
}
