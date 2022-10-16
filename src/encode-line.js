const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let returnString = "";
  let currentChar='';
  let repeatNumber = 0;
  for (let i = 0; i<str.length; i++){
    if(str.charAt(i)===currentChar){
      repeatNumber++;
    }
    else{
      returnString+=(""+((repeatNumber)?(repeatNumber+1)+currentChar:currentChar));
      repeatNumber=0;
      currentChar=str.charAt(i);
    }
    if(i===(str.length-1)) {
      returnString+=(""+((repeatNumber)?(repeatNumber+1)+currentChar:currentChar));
    }

  }
  return returnString;
}

module.exports = {
  encodeLine
};
