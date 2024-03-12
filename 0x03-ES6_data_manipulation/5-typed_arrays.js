export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    return new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  const int8Array = new Int8Array(buffer);

  int8Array.set([value], position);
  // int8Array[position] = value;

  const dataView = new DataView(buffer);

  return dataView;
}
