export default function hasValuesFromArray(set, array) {
  let bool = true;

  if (array.length === 0) return false;

  for (const number of array) {
    if (!set.has(number)) {
      bool = false;
      break;
    }
  }
  return bool;
}
