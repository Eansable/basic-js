const CustomError = require("../extensions/custom-error");

module.exports = function transform1(arr) {
 let i = 0;
 let finishArr = [];
 while (i < arr.length) {
   finishArr.push(arr[i]);
   if (arr[i] === '--discard-next') {if (arr[i+1] !== undefined) {finishArr.pop();  i++; } else {finishArr.pop()}}
   else if (arr[i] === '--discard-prev') {if (arr[i-1] !== undefined) {finishArr.pop(); finishArr.pop();} else {finishArr.pop()}}
   else if (arr[i] === '--double-next') {if (arr[i+1] !== undefined) {finishArr.pop(); finishArr.push(arr[i+1])} else {finishArr.pop()}}
   else if  (arr[i] === '--double-prev') {if (arr[i-1] !== undefined) {finishArr.pop(); finishArr.push(arr[i-1])} else {finishArr.pop()}}
   i++;

 }
 return finishArr;
};

module.exports = function transform(arr) {
const finishArr = [];
const tempArr = arr.slice();
const NA = '--empty';
for (let i = 0; i < tempArr.length; i++) {
  if (tempArr[i] === '--empty') { }
  else if (tempArr[i] === '--discard-next' ) {
    if (i + 1 < tempArr.length){
     tempArr[i + 1] = NA;
    }
  } else if (tempArr[i] === '--discard-prev') {
    if (i - 1 > 0){
      if (tempArr[i - 1] === '--empty') { }
      else {finishArr.pop();}
    }
  } else if (tempArr[i] === '--double-next' ) {
    if (i + 1 < tempArr.length){
    finishArr.push(tempArr[i + 1]);
    }
  } else if (tempArr[i] === '--double-prev') {
    if (i - 1 > 0){
      if (tempArr[i - 1] === '--empty') { }
    else {finishArr.push(tempArr[i - 1])}
    }
  }
    else {
    finishArr.push(tempArr[i]);
  }

}
return finishArr;
}