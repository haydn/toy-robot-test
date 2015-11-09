import test from 'tape';
import Position from '../src/position';
import Table from '../src/table';

test('Table must have width and height properties', t => {

  let table = new Table(2, 3);

  t.plan(2);

  t.equals(table.width, 2);
  t.equals(table.height, 3);

});

test('Table#isValid must return true is a position is within bounds and false otherwise', t => {

  let table = new Table(2, 3);

  t.plan(4);

  t.true(table.isValid(new Position(0, 0)));
  t.true(table.isValid(new Position(1, 2)));

  t.false(table.isValid(new Position(-1, 0)));
  t.false(table.isValid(new Position(2, 2)));

});

test("Table must throw an error if the x or y arguments aren't provided", t => {

  t.plan(2);

  t.throws(() => {
    new Table();
  });

  t.throws(() => {
    new Table(1);
  });

});

test('Table must throw an error if the x or y arguments are less than or equal to 0', t => {

  t.plan(2);

  t.throws(() => {
    new Table(1, 0);
  });

  t.throws(() => {
    new Table(-1, 1);
  });

});

test('Table must coerce x and y values to whole numbers', t => {

  let table = new Table(1.4, '34');

  t.plan(2);

  t.equals(table.width, 1);
  t.equals(table.height, 34);

});
