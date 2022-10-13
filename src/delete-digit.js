const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let charArrayN = n.toString(10).split("");
  let maximumNumber = -1;
  let temp = [];
  for(let i = 0; i<charArrayN.length; i++){
    temp = [...charArrayN];
    temp.splice(i,1);
    let number = parseInt(temp.join(''),10);
    if(number>maximumNumber) maximumNumber = number;
  }
  return maximumNumber;
}

module.exports = {
  deleteDigit
};
