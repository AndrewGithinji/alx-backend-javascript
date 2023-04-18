export default function concatArrays(array1, array2, string) {
  const spread = [...array1, ...array2, ...string];
  return spread;
}
