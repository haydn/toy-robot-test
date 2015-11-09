import Position from './position';
import Robot from './robot';
import Table from './table';

export default class Simulator {

  constructor() {
    this._table = new Table(5, 5);
    this._robot = new Robot(this._table);
  }

  exec(order) {

    let [type, options] = this._parseOrder(order);
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

  _parseOrder(order) {

    order = order.trim().toUpperCase();

    let index = order.indexOf(' ');

    if (index === -1) {
      return [
        order,
        []
      ];
    } else {
      return [
        order.slice(0, index).trim(),
        order.slice(index).trim().split(',').map(x => x.trim())
      ];
    }

  }

}
