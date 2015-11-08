import test from 'tape';
import path from 'path';
import Runner from '../src/runner.js';

test('the runner must execute orders from a file and output the results', t => {

  let runner = new Runner();

  t.plan(3);

  runner.exec(path.join(__dirname, 'resources/a.txt'), output => {
    t.equals(output, '0,1,NORTH');
  });

  runner.exec(path.join(__dirname, 'resources/b.txt'), output => {
    t.equals(output, '0,0,WEST');
  });

  runner.exec(path.join(__dirname, 'resources/c.txt'), output => {
    t.equals(output, '3,3,NORTH');
  });

});
