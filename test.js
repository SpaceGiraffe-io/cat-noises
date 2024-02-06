import test from 'ava';
import catnoiseCli from './index.js';

test('title', t => {
  t.throws(() => {
    catnoiseCli(123);
  }, {
    instanceOf: TypeError,
    message: 'Expected a string, got number',
  });

  t.is(catnoiseCli('unicorns'), 'unicorns & rainbows');
});
