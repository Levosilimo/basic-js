const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const regex = /[0-9A-F-]/g;
  if(inputString!==inputString.match(regex).join("")) return false;
  const digitGroups = inputString.split("-");
  if (digitGroups.length!==6) return false;
  for (let digitGroup of digitGroups){
    if(digitGroup.length!==2) return false;
  }
  return true;
}
module.exports = {
  isMAC48Address
};
