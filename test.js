import test from 'ava';
import playcatnoiseCli from './index.js';

test('title', t => {
	t.throws(() => {
		playcatnoiseCli(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number',
	});

	t.is(playcatnoiseCli('unicorns'), 'unicorns & rainbows');
});
