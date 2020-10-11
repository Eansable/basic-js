const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < matrix.length) {
    j = 0;
    while (j < matrix[i].length) {
      if (matrix[i][j] === "^^") {
        count++;
      }
      j++;
    }
    i++;
  }
  return count;
};
