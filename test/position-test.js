import test from 'tape';
import Position from '../src/position';

test('Position must have NORTH, EAST, SOUTH and WEST static consts', t => {

  t.plan(4);

  t.equals(Position.NORTH, 'north');
  t.equals(Position.EAST, 'east');
  t.equals(Position.SOUTH, 'south');
  t.equals(Position.WEST, 'west');

});

test('Position must have x, y and facing properties', t => {

  let position = new Position(3, 4, Position.NORTH);

  t.plan(3);

  t.equals(position.x, 3);
  t.equals(position.y, 4);
  t.equals(position.facing, Position.NORTH);

});

test('Position#forward return new position in front of the current position', t => {

  let positionA = (new Position(1, 2, Position.NORTH)).forward();
  let positionB = (new Position(1, 2, Position.EAST)).forward();
  let positionC = (new Position(1, 2, Position.SOUTH)).forward();
  let positionD = (new Position(1, 2, Position.WEST)).forward();

  t.plan(8);

  t.equals(positionA.x, 1);
  t.equals(positionA.y, 3);

  t.equals(positionB.x, 2);
  t.equals(positionB.y, 2);

  t.equals(positionC.x, 1);
  t.equals(positionC.y, 1);

  t.equals(positionD.x, 0);
  t.equals(positionD.y, 2);

});

test('Position#report must return a string representing the position', t => {

  let position = new Position(3, 4, Position.NORTH);

  t.plan(1);

  t.equals(position.report(), '3,4,NORTH');

});

test('Position must coerce x and y values to whole numbers', t => {

  let position = new Position('3', 4.5, Position.NORTH);

  t.plan(2);

  t.equals(position.x, 3);
  t.equals(position.y, 4);

});

test('Position must use north as the default facing if no direction is provided', t => {

  let position = new Position(0, 0);

  t.plan(1);

  t.equals(position.facing, Position.NORTH);

});

test('Position must tolerate any case for the facing', t => {

  t.plan(3);

  t.equals(new Position(0, 0, 'north').facing, Position.NORTH);
  t.equals(new Position(0, 0, 'NORTH').facing, Position.NORTH);
  t.equals(new Position(0, 0, 'nOrTh').facing, Position.NORTH);

});

test('Position must throw an error if the facing is not a valid direction', t => {

  t.plan(1);

  t.throws(() => {
    new Position(0, 0, 'foo');
  });

});
