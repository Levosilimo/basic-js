const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  if(Array.isArray(members)){
    members = members.filter(member => typeof member === "string").map(member => member.toUpperCase().trim().charAt(0));
    members.sort();
    for(let member of members){
      teamName+=member;
    }
  }
  return (teamName.length>0) ? teamName : false;
}

module.exports = {
  createDreamTeam
};
