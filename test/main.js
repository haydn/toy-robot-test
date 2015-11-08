import test from 'tape';
import Runner from '../src/main.js';

test('the runner must exist', t => {
  t.plan(1);
  t.assert(Runner);
});
