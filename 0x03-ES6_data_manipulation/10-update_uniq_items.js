export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const key of myMap.keys()) {
    if (myMap.get(key) === 1) {
      myMap.set(key, 100);
    }
  }
  return myMap;
}
