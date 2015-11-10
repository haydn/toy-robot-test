/**
 * A robot that can be moved around a table.
 *
 * @example
 * let table = new Table(5, 5);
 * let robot = new Robot(table);
 * let position = new Position(2, 2, Position.EAST);
 *
 * robot.place(position); // places the robot on the table
 * robot.move(); // moves the robot forward
 * robot.left(); // rotates the robot left
 * robot.right(); // rotates the robot right
 */
export default class Robot {

  constructor(table) {
    this._table = table;
    this._position = null;
  }

  /**
   * The current position of the robot. If the robot has not been placed on the
   * table this will be null.
   *
   * @type {Position}
   */
  get position() {
    return this._position;
  }

  /**
   * Rotates the robot left. Ignored if the robot has not been placed on the table.
   */
  left() {
    if (this._position) {
      this._position = this._position.left();
    }
  }

  /**
   * Moves the robot forward if the position in front is valid. Ignored if the
   * robot has not been placed on the table.
   */
  move() {

    if (this._position) {

      let newPosition = this._position.forward();

      if (this._table.isValid(newPosition)) {
        this._position = newPosition;
      }

    }

  }

  /**
   * Places the robot on the table at the position given, if the position is valid.
   * @param {Position} position - The position to attempt to place the robot at.
   */
  place(position) {
    if (this._table.isValid(position)) {
      this._position = position;
    }
  }

  /**
   * Rotates the robot right. Ignored if the robot has not been placed on the table.
   */
  right() {
    if (this._position) {
      this._position = this._position.right();
    }
  }

}
