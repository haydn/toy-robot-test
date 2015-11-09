import test from 'tape';
import Runner from '../src/runner';

test('Runner#exec must handle PLACE and REPORT orders', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec('PLACE 1,1,NORTH');
  t.equals(runner.exec('REPORT'), '1,1,NORTH');

});

test('Runner#exec must handle PLACE, MOVE and REPORT orders', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec('PLACE 0,0,NORTH');
  runner.exec('MOVE');
  t.equals(runner.exec('REPORT'), '0,1,NORTH');

});

test('Runner#exec must handle PLACE, MOVE, LEFT and REPORT orders', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec('PLACE 0,0,NORTH');
  runner.exec('LEFT');
  t.equals(runner.exec('REPORT'), '0,0,WEST');

});

test('Runner#exec must ignore orders that would put the robot in an invalid position', t => {

  let runner = new Runner();

  t.plan(1);

  runner.exec('PLACE 4,4,NORTH');
  runner.exec('MOVE');
  runner.exec('MOVE');
  runner.exec('RIGHT');
  runner.exec('MOVE');
  runner.exec('MOVE');
  runner.exec('LEFT');
  t.equals(runner.exec('REPORT'), '4,4,NORTH');

});

test('Runner#exec must ignore any orders that come before the first PLACE order', t => {

  let runner = new Runner();

  t.plan(2);

  runner.exec('MOVE');
  runner.exec('LEFT');
  t.equals(runner.exec('REPORT'), '');
  runner.exec('PLACE 1,1,NORTH');
  t.equals(runner.exec('REPORT'), '1,1,NORTH');

});

test('Runner#exec must be case insensitive', t => {

  let runner = new Runner();

  t.plan(2);

  runner.exec('place 0,0,north');
  runner.exec('move');
  runner.exec('right');
  runner.exec('RIGHT');
  runner.exec('MOVE');
  runner.exec('LEFT');
  runner.exec('left');
  t.equals(runner.exec('report'), '0,0,NORTH');
  runner.exec('place 0,0,north');
  t.equals(runner.exec('REPORT'), '0,0,NORTH');

});

test('Runner#exec must handle extra whitespace', t => {

  let runner = new Runner();

  t.plan(2);

  runner.exec('PLACE 2, 2 ,WEST');
  runner.exec(' MOVE');
  runner.exec('LEFT');
  runner.exec('REPORT ');
  t.equals(runner.exec('REPORT'), '1,2,SOUTH');
  runner.exec('PLACE 1 , 1 ,NORTH');
  runner.exec(' RIGHT');
  runner.exec(' MOVE ');
  runner.exec(' MOVE');
  t.equals(runner.exec('REPORT'), '3,1,EAST');

});

test('Runner#exec must throw an error if an unknown order is given', t => {

  let runner = new Runner();

  t.plan(1);

  t.throws(() => {
    runner.exec('BLAH');
  });

});
