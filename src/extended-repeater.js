const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: ''}) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.addition !== undefined) {
    str += `${options.addition}`
  }
  if (options.addition !== undefined && options.additionSeparator !== undefined) {
    for (let i = 1; i < options.additionRepeatTimes; i++) {
    str +=`${options.additionSeparator}${options.addition}`
    }
  }


  let strResult = str;
  for (let i = 1; i < options.repeatTimes; i++) {
    strResult += `${options.separator}${str}`;
  }
  return strResult;
};
