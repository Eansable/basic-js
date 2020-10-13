const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
const countSteps = Math.pow(2, disksNumber) - 1;
const countSeconds = Math.floor((3600 / turnsSpeed) * countSteps);
const result = {
  turns: countSteps,
  seconds: countSeconds
};
return result;
};
