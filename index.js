import fs from 'fs';
import Simulator from './src/simulator';

let file = process.argv[2];

if (file) {

  let simulator = new Simulator();

  fs.readFile(file, 'utf8', (err, orders) => {
    let output = orders
      .split('\n')
      .map(order => simulator.exec(order))
      .filter(x => x)
      .join('\n');
    console.log(output)
  });

} else {

  console.log('Usage:');
  console.log();
  console.log('  npm start orders/basic.txt');
  console.log();

}
