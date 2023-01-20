import { playAudioFile } from 'audic';

export const audioUtils = {
  playSound
};

function playSound(path) {
  playAudioFile(path);
}

