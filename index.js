import { audioUtils } from './utils/audio-utils.js';
import { mathUtils } from './utils/math-utils.js';

export default function playCatNoise() {
  const number = mathUtils.randomIntBetween(1, 27);
  const path = `/sounds/cat${number}.mp3`;
  audioUtils.playSound(path);
}

