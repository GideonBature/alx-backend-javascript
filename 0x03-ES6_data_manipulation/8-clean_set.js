export default function cleanSet(set, startString) {
  const setArray = [...set];

  if (startString === undefined || startString.length === 0) return '';

  return setArray
    .filter((word) => (word !== undefined ? word.startsWith(startString) : ''))
    .map((word) => (word !== undefined ? word.slice(startString.length) : ''))
    .join('-');
}
