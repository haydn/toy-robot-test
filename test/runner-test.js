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

test('Runner#exec must read PLACE, MOVE and REPORT orders from a file and output the results', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/move.txt'), output => {
    t.equals(output.trim(), '0,1,NORTH');
  });

});

test('Runner#exec must read PLACE, MOVE, LEFT and REPORT orders from a file and output the results', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/left.txt'), output => {
    t.equals(output.trim(), '0,0,WEST');
  });

});

test('Runner#exec must ignore orders that would put the robot in an invalid position', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/invalid.txt'), output => {
    t.equals(output.trim(), '4,4,NORTH');
  });

});

test('Runner#exec must ignore any orders that come before the first PLACE order', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/preplace.txt'), output => {
    t.equals(output.trim(), '1,1,NORTH');
  });

});

test('Runner#exec must read repeated orders from a file and output the results', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/repeats.txt'), output => {
    t.equals(output.trim(), '3,3,NORTH');
  });

});

test('Runner#exec must handle extra whitespace', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec(path.join(__dirname, 'resources/whitespace.txt'), output => {
    t.equals(output.trim(), '3,1,EAST');
  });

});

// TODO: throw an error if an order is unknown
