#!/usr/bin/env node
import meow from 'meow';
import catNoise from './index.js';

const cli = meow(`
  Usage
    $ catnoise

  Options
    None!

  Examples
    $ catnoise
    <plays a cat noise>
`, {
  importMeta: import.meta,
  flags: {}
});

(function main() {
  catNoise();
})();

