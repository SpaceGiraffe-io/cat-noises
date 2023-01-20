#!/usr/bin/env node
import meow from 'meow';
import playCatNoise from './index.js';

const cli = meow(`
  Usage
    $ playcatnoise

  Options
    None!

  Examples
    $ playcatnoise
    <plays a cat noise>
`, {
  importMeta: import.meta,
  flags: {}
});

(function main() {
  playCatNoise();
})();

