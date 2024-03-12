export default function cleanSet(set, startString) {
  let word = '';

  if (startString === '') return '';

  for (const str of set) {
    if (str.startsWith(startString)) {
      const newStr = str.slice(startString.length, str.length + 1);

      if (word.length > 1) word += '-';

      word += newStr;
    }
  }
  return word;
}
