import test from 'tape';
import Simulator from '../src/simulator';

test('Simulator#exec must handle PLACE and REPORT orders', t => {

  let simulator = new Simulator();

  t.plan(1);

  simulator.exec('PLACE 1,1,NORTH');
  t.equals(simulator.exec('REPORT'), '1,1,NORTH');

});

test('Simulator#exec must handle PLACE, MOVE and REPORT orders', t => {

  let simulator = new Simulator();

  t.plan(1);

  simulator.exec('PLACE 0,0,NORTH');
  simulator.exec('MOVE');
  t.equals(simulator.exec('REPORT'), '0,1,NORTH');

});

test('Simulator#exec must handle PLACE, MOVE, LEFT and REPORT orders', t => {

  let simulator = new Simulator();

  t.plan(1);

  simulator.exec('PLACE 0,0,NORTH');
  simulator.exec('LEFT');
  t.equals(simulator.exec('REPORT'), '0,0,WEST');

});

test('Simulator#exec must ignore orders that would put the robot in an invalid position', t => {

  let simulator = new Simulator();

  t.plan(1);

  simulator.exec('PLACE 4,4,NORTH');
  simulator.exec('MOVE');
  simulator.exec('MOVE');
  simulator.exec('RIGHT');
  simulator.exec('MOVE');
  simulator.exec('MOVE');
  simulator.exec('LEFT');
  t.equals(simulator.exec('REPORT'), '4,4,NORTH');

});

test('Simulator#exec must ignore any orders that come before the first PLACE order', t => {

  let simulator = new Simulator();

  t.plan(2);

  simulator.exec('MOVE');
  simulator.exec('LEFT');
  t.equals(simulator.exec('REPORT'), '');
  simulator.exec('PLACE 1,1,NORTH');
  t.equals(simulator.exec('REPORT'), '1,1,NORTH');

});

test('Simulator#exec must be case insensitive', t => {

  let simulator = new Simulator();

  t.plan(2);

  simulator.exec('place 0,0,north');
  simulator.exec('move');
  simulator.exec('right');
  simulator.exec('RIGHT');
  simulator.exec('MOVE');
  simulator.exec('LEFT');
  simulator.exec('left');
  t.equals(simulator.exec('report'), '0,0,NORTH');
  simulator.exec('place 0,0,north');
  t.equals(simulator.exec('REPORT'), '0,0,NORTH');

});

test('Simulator#exec must handle extra whitespace', t => {

  let simulator = new Simulator();

  t.plan(2);

  simulator.exec('PLACE 2, 2 ,WEST');
  simulator.exec(' MOVE');
  simulator.exec('LEFT');
  simulator.exec('REPORT ');
  t.equals(simulator.exec('REPORT'), '1,2,SOUTH');
  simulator.exec('PLACE 1 , 1 ,NORTH');
  simulator.exec(' RIGHT');
  simulator.exec(' MOVE ');
  simulator.exec(' MOVE');
  t.equals(simulator.exec('REPORT'), '3,1,EAST');

});

test('Simulator#exec must throw an error if an unknown order is given', t => {

  let simulator = new Simulator();

  t.plan(1);

  t.throws(() => {
    simulator.exec('BLAH');
  });

});
