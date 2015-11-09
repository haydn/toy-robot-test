import fs from 'fs';
import Runner from './src/runner';

let file = process.argv[2];

if (file) {

  let runner = new Runner();

  fs.readFile(file, 'utf8', (err, orders) => {
    let output = orders
      .split('\n')
      .map(order => runner.exec(order))
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
