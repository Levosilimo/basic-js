const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let longerCharArray = (s1.length>s2.length?s1:s2).split("");
  let shorterCharArray = (s1.length>s2.length?s2:s1).split("");
  let returnNumber = 0;
  mainLoop:
  for(let i = 0; i<longerCharArray.length; i++){
    let char = longerCharArray[i];
    if(shorterCharArray.includes(char)){
      for (let j = 0; j<shorterCharArray.length; j++){
        if(char===shorterCharArray[j]){
          longerCharArray.splice(i,1);
          shorterCharArray.splice(j,1);
          returnNumber++;
          i = 0;
          continue mainLoop;
        }
      }
    }
  }
  return returnNumber;
}

module.exports = {
  getCommonCharacterCount
};
