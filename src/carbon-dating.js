const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
  if (typeof sampleActivity !== 'string') {return false;}
  if (Number(sampleActivity) < 0 || Number(sampleActivity) > MODERN_ACTIVITY) {return false}
  if (isNaN(Number(sampleActivity)) || Number(sampleActivity) === 0) {return false;}
  result = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.trunc(result);
}