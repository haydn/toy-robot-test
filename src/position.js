export default class Position {

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

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get facing() {
    return this._facing;
  }

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

  report() {
    return [this._x, this._y, this._facing.toUpperCase()].join(',');
  }

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
