/**
 * A position with x, y and facing properties.
 *
 * @example
 *
 * let position = new Position(1, 2, Position.SOUTH);
 *
 * position.left().facing; // 'east'
 * position.right().facing; // 'west'
 * position.forward().y; // 1
 *
 */
export default class Position {

  /**
   * @param {number} x
   * @param {number} y
   * @param {string} [facing='north']
   */
  constructor(x, y, facing) {

    this._x = ~~x;
    this._y = ~~y;

    facing = facing || Position.NORTH;

    switch (facing.toLowerCase()) {
      case Position.NORTH:
        this._facing = Position.NORTH;
        break;
      case Position.EAST:
        this._facing = Position.EAST;
        break;
      case Position.SOUTH:
        this._facing = Position.SOUTH;
        break;
      case Position.WEST:
        this._facing = Position.WEST;
        break;
      default:
        throw new Error(`Unknown facing '${facing}'`);
    }

  }

  /** @type {number} */
  get x() {
    return this._x;
  }

  /** @type {number} */
  get y() {
    return this._y;
  }

  /**
   * The direction the position is facing. One of 'north', 'east', 'south' or 'west'.
   *
   * @type {string}
   */
  get facing() {
    return this._facing;
  }

  /**
   * Returns a new position that is in front of this position.
   *
   * @return {Position}
   */
  forward() {
    switch (this._facing) {
      case Position.NORTH:
        return new Position(this._x, this._y + 1, this._facing);
      case Position.EAST:
        return new Position(this._x + 1, this._y, this._facing);
      case Position.SOUTH:
        return new Position(this._x, this._y - 1, this._facing);
      case Position.WEST:
        return new Position(this._x - 1, this._y, this._facing);
      default:
    }
  }

  /**
   * Returns a new position at the same location with the facing rotated left.
   *
   * @return {Position}
   */
  left() {
    switch (this._facing) {
      case Position.NORTH:
        return new Position(this._x, this._y, Position.WEST);
      case Position.EAST:
        return new Position(this._x, this._y, Position.NORTH);
      case Position.SOUTH:
        return new Position(this._x, this._y, Position.EAST);
      case Position.WEST:
        return new Position(this._x, this._y, Position.SOUTH);
      default:
    }
  }

  /**
   * Returns a with the position's x, y and facing like this: '2,1,NORTH'
   *
   * @return {string}
   */
  report() {
    return [this._x, this._y, this._facing.toUpperCase()].join(',');
  }

  /**
   * Returns a new position at the same location with the facing rotated right.
   *
   * @return {Position}
   */
  right() {
    switch (this._facing) {
      case Position.NORTH:
        return new Position(this._x, this._y, Position.EAST);
      case Position.EAST:
        return new Position(this._x, this._y, Position.SOUTH);
      case Position.SOUTH:
        return new Position(this._x, this._y, Position.WEST);
      case Position.WEST:
        return new Position(this._x, this._y, Position.NORTH);
      default:
    }
  }

}

Position.NORTH = 'north';
Position.EAST = 'east';
Position.SOUTH = 'south';
Position.WEST = 'west';
