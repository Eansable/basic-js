const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members === 'undefined' || typeof members === 'boolean' || members === null) {return false;}
  let i = 0;
  let isDreamTeam = '';
  let membersFiltered = [];
  if (typeof members !== '')
  while (i < members.length) {
      if (typeof members[i] === 'string') {
        membersFiltered.push(members[i].trim().toUpperCase());
      }
      i++;
    }
    i = 0;
    if (membersFiltered.length === 0) {return false;}
    membersFiltered.sort();

    while (i < membersFiltered.length) {
      isDreamTeam = `${isDreamTeam}${membersFiltered[i][0]}`;
      i++;
    }
return isDreamTeam;

};
