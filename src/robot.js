export default class Robot {

  constructor(table) {
    this._table = table;
    this._position = null;
  }

  get position() {
    return this._position;
  }

  place(position) {
    if (this._table.isValid(position)) {
      this._position = position;
    }
  }

}
