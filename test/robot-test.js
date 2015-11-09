import test from 'tape';
import Position from '../src/position';
import Robot from '../src/robot';
import Table from '../src/table';

test('Robot have a position property that is null by default and a position after being placed', t => {

  let table = new Table(3, 3);
  let robot = new Robot(table);
  let position = new Position(1, 1, Position.EAST);

  t.plan(4);

  t.equals(robot.position, null);

  robot.place(position);

  t.equals(robot.position.x, 1);
  t.equals(robot.position.y, 1);
  t.equals(robot.position.facing, Position.EAST);

});

test('Robot#move must move the robot unless the new position is invalid', t => {

  let table = new Table(3, 3);
  let robot = new Robot(table);
  let startPosition = new Position(1, 1, Position.NORTH);

  t.plan(4);

  robot.place(startPosition);

  robot.move();

  t.equals(robot.position.x, 1);
  t.equals(robot.position.y, 2);

  robot.move();

  t.equals(robot.position.x, 1);
  t.equals(robot.position.y, 2);

});

test('Robot#place must be ignored if the given position is not valid', t => {

  let table = new Table(3, 3);
  let robot = new Robot(table);
  let validPosition = new Position(1, 1, Position.EAST);
  let invalidPosition = new Position(5, 5, Position.SOUTH);

  t.plan(5);

  robot.place(invalidPosition);

  t.equals(robot.position, null);

  robot.place(validPosition);

  t.equals(robot.position.x, 1);
  t.equals(robot.position.y, 1);

  robot.place(invalidPosition);

  t.equals(robot.position.x, 1);
  t.equals(robot.position.y, 1);

});
