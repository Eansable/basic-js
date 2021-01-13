const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    // return this.calcArray(arr, 1)
    let maxDepth = depth;
    arr.forEach(elem => {
      if (elem instanceof Array) {
        let elemDepth = this.calculateDepth(elem, depth + 1)
        if (elemDepth > maxDepth) {
          maxDepth = elemDepth;
        }
      }
    });
    return maxDepth;

  }
};