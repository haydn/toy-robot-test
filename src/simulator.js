import Position from './position';
import Robot from './robot';
import Table from './table';

/**
 * Simulates moving a toy robot on a 5x5 table.
 *
 * Note: The 0,0 coordinate is in the south-west corner.
 *
 * @example
 * let simulator = new Simulator();
 *
 * simulator.exec('PLACE 1,2,NORTH'); // ''
 * simulator.exec('MOVE'); // ''
 * simulator.exec('REPORT'); // '1,3,NORTH'
 */
export default class Simulator {

  constructor() {
    this._table = new Table(5, 5);
    this._robot = new Robot(this._table);
  }

  /**
   * Parses the given order and gives the instruction to the robot.
   *
   * @param {string} order - The order to execute.
   * @return {string} - Result of the order (every order except the 'report' order returns an empty string).
   */
  exec(order) {

    let { type, options } = this._parseOrder(order);
    let output = '';

    switch (type) {
      case 'PLACE':
        let [x, y, facing] = options;
        this._robot.place(new Position(x, y, facing));
        break;
      case 'MOVE':
        this._robot.move();
        break;
      case 'LEFT':
        this._robot.left();
        break;
      case 'RIGHT':
        this._robot.right();
        break;
      case 'REPORT':
        if (this._robot.position) {
          output = this._robot.position.report();
        }
        break;
      case '':
        break;
      default:
        throw new Error('Unknown order:', type);
    }

    return output;

  }

  /**
   * Takes an order string and returns an order object.
   *
   * @example
   * simulator._parseOrder(' place 2,1,NOrTH'); // { type: 'PLACE', options: ['2', '1', 'NORTH'] }
   * simulator._parseOrder('MOVE'); // { type: 'MOVE', options: [] }
   *
   * @param {string} order - The order to be parsed.
   * @return {Object} The parsed order.
   * @property {string} type - The order type.
   * @property {string[]} options - Options for the order.
   */
  _parseOrder(order) {

    order = order.trim().toUpperCase();

    let index = order.indexOf(' ');

    if (index === -1) {
      return {
        type: order,
        options: []
      };
    } else {
      return {
        type: order.slice(0, index).trim(),
        options: order.slice(index).trim().split(',').map(x => x.trim())
      };
    }

  }

}
