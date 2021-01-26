const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mode = true) {
    this.unreverse = mode,
    this.vE = 'abcdefghijklmnopqrstuvwxyz'
  }
  //  vA = {  a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25};
  //  vD = {  1: a, 2: b, 3: c, 4: d, 5: e, 6: f, 7: g, 8: h, 9: i, 10: j, 11: k, 12: l, 13: m, 14: n, 15: o, 16: p, 17: r, 18: s, 19: t, 20: u, 21: v, 22: w, 23: x, 24: y, 25:  z};


  encrypt(str, key) {
    let alphabetKey = '';
    while (alphabetKey.length < str.length) {
      alphabetKey += key.toLowerCase();
    }
    let result = '';
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.vE.includes(str[i].toLowerCase())){
        let indexLetter = this.vE.indexOf(str[i].toLowerCase());
        let indexKeyLetter = this.vE.indexOf(alphabetKey[j]);
        let indexNewLetter = (indexLetter + indexKeyLetter) % 26;
        result += this.vE[indexNewLetter];
        j++;
      } else {
        result += str[i];
      }

    }
    return this.unreverse ? result.toUpperCase() : this.reverseStr(result.toUpperCase());
    // arrayChar.array.forEach((element, i) => {
    //   const number = vA[element] - vA[arrayKey[i % arrayChar.length]];
    //   result += vD[Math.abs(numer) % 25].toUpperCase();
    // });


  }
  decrypt(str, key) {
    let alphabetKey = '';
    while (alphabetKey.length < str.length) {
      alphabetKey += key.toLowerCase();
    }
    let result = '';
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.vE.includes(str[i].toLowerCase())){
        let indexLetter = this.vE.indexOf(str[i].toLowerCase());
        let indexKeyLetter = this.vE.indexOf(alphabetKey[j]);
        let indexNewLetter = (indexLetter + 26 - indexKeyLetter) % 26;
        result += this.vE[indexNewLetter];
        j++;
      } else {
        result += str[i];
      }

    }
    return this.unreverse ? result.toUpperCase() : this.reverseStr(result.toUpperCase());
  }

  reverseStr(str) {
    return str.split("").reverse().join("");

  }
}

module.exports = VigenereCipheringMachine;
