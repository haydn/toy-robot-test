import test from 'tape';
import path from 'path';
import Runner from '../src/runner';

test('Runner#exec must read PLACE and REPORT orders from a file and output the results', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/basic.txt'), output => {
    t.equals(output.trim(), '1,1,NORTH');
  });

});

test.skip('Runner#exec must read orders from a file, pass them on to the robot and output the results', t => {

  let runner = new Runner();

  t.plan(3);

  runner.exec(path.join(__dirname, 'resources/a.txt'), output => {
    t.equals(output.trim(), '0,1,NORTH');
  });

  runner.exec(path.join(__dirname, 'resources/b.txt'), output => {
    t.equals(output.trim(), '0,0,WEST');
  });

  runner.exec(path.join(__dirname, 'resources/c.txt'), output => {
    t.equals(output.trim(), '3,3,NORTH');
  });

});
