const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
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
