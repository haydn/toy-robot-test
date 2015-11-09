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

  report() {
    return [this._x, this._y, this._facing.toUpperCase()].join(',');
  }

}

Position.NORTH = 'north';
Position.EAST = 'east';
Position.SOUTH = 'south';
Position.WEST = 'west';
