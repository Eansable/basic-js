const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arrayResult: [],

  getLength() {
    return this.arrayResult.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arrayResult.push(` ${value} `);
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if ( typeof position === 'number') {
      if (position < 1 || position > this.arrayResult.length){
        this._deleteChain();
        throw new Error('Removing link position is out for range')
      }
      this.arrayResult.splice(position - 1, 1);
      return this;
    }
    this._deleteChain();
    throw new Error('Position incorrect!');

    // remove line with error and write your code here
  },
  reverseChain() {
    this.arrayResult.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    result = `(${this.arrayResult[0]})`
    for (let i = 1; i < this.arrayResult.length; i++) {
      result += `~~(${this.arrayResult[i]})`;
    }
    this._deleteChain();
    return result;
    // remove line with error and write your code here
  },
  _deleteChain() {
    this.arrayResult.length = 0;
  }
};

module.exports = chainMaker;
