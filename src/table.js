export default class Table {

  constructor(width, height) {

    if (arguments.length < 2) {
      throw new Error('You must provide and width and height.');
    }

    width = ~~width;
    height = ~~height;

    if (width <= 0) {
      throw new Error('The width must be greater than 0.');
    }

    if (height <= 0) {
      throw new Error('The height must be greater than 0.');
    }

    this._width = ~~width;
    this._height = ~~height;

  }

  get height() {
    return this._height;
  }

  get width() {
    return this._width;
  }

  isValid(p) {
    return p.x >= 0 && p.x < this._width && p.y >= 0 && p.y < this._height;
  }

}
