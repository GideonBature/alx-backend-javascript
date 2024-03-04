export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const word of array) {
    newArray.push(appendString + word);
  }

  return newArray;
}
