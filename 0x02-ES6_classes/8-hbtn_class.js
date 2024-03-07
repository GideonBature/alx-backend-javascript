export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // eslint-disable-next-line consistent-return
  [Symbol.toPrimitive](datatype) {
    if (datatype === 'number') {
      return this._size;
    }
    if (datatype === 'string') {
      return this._location;
    }
  }
}
