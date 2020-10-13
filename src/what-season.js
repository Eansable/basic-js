const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date = null) {
  if (date === null) return 'Unable to determine the time of year!';
  if (date.getUTCMonth() === 11 || (date.getUTCMonth() >= 0 && date.getUTCMonth() <= 1)) return 'winter';
  else if (date.getUTCMonth() >= 2 && date.getUTCMonth() <= 4) return 'spring';
  else if (date.getUTCMonth() >= 5 && date.getUTCMonth() <= 7) return 'summer' ;
  else if (date.getUTCMonth() >= 8 && date.getUTCMonth() <= 10) return 'autumn';
};
