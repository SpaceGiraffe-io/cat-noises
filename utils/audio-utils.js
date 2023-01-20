import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { playAudioFile } from 'audic';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const audioUtils = {
  playSound
};

function playSound(filePath) {
  const audioPath = path.join(__dirname, '..', filePath);
  playAudioFile(audioPath);
}

