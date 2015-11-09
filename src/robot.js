export default class Robot {

  constructor(table) {
    this._table = table;
    this._position = null;
  }

  get position() {
    return this._position;
  }

  left() {
    if (this._position) {
      this._position = this._position.left();
    }
  }

  move() {

    if (this._position) {

      let newPosition = this._position.forward();

      if (this._table.isValid(newPosition)) {
        this._position = newPosition;
      }

    }

  }

  place(position) {
    if (this._table.isValid(position)) {
      this._position = position;
    }
  }

  right() {
    if (this._position) {
      this._position = this._position.right();
    }
  }

}
