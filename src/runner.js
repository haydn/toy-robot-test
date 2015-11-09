/*eslint no-console: 0*/

import fs from 'fs';
import Position from './position';
import Robot from './robot';
import Table from './table';

export default class Runner {

  constructor() {
    this._table = new Table(5, 5);
    this._robot = new Robot(this._table);
  }

  exec(file, callback) {

    fs.readFile(file, 'utf8', (err, orders) => {

      let output = [];

      orders.split('\n').map(x => x.trim()).forEach(order => {

        let [type, data] = order.split(' ').map(x => x.trim());

        switch (type.toUpperCase()) {
          case 'PLACE':
            let [x, y, facing] = (data || '').split(',');
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
            output.push(this._robot.position.report());
            break;
          default:
            console.log('Unknown order:', type);
        }

      });

      callback(output.join('\n'));

    });

  }

}
