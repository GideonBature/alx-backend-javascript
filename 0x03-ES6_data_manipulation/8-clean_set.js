export default function cleanSet(set, startString) {
  if (!startString) return '';
  
  if (set === undefined) return '';

  const result = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      result.push(str.slice(startString.length));
    }
  }
  return result.join('-');
}
