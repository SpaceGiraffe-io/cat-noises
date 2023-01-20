
export const mathUtils = {
  randomIntBetween
};

function randomIntBetween(min, max) {
  return min + Math.floor(Math.random() * ((max + 1) - min));
}

