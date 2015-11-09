/**
 * @example
 *
 * let table = new Table(2, 5);
 * let position  = new Position(10, 10);
 *
 * table.width; // 2
 * table.height; // 5
 * table.isValid(position); // false
 *
 */
export default class Table {

  /**
   * @param {number} width
   * @param {number} height
   */
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

  /** @type {number} */
  get height() {
    return this._height;
  }

  /** @type {number} */
  get width() {
    return this._width;
  }

  /**
   * Checks if the given position is within the bounds of the table and a valid
   * location to place an object.
   *
   * @param {Position} p - The position to check. The facing information in not used.
   * @return {boolean} - Returns true if the position is valid.
   */
  isValid(p) {
    return p.x >= 0 && p.x < this._width && p.y >= 0 && p.y < this._height;
  }

}
