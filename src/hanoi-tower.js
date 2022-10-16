const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {
  let returnObject = {turns:1,seconds:0};
  for (let i = 1; i<disks; i++){
    returnObject.turns*=2;
    returnObject.turns++;
  }
  returnObject.seconds = Math.floor((returnObject.turns*3600)/turnsSpeed);
  return returnObject;
}

module.exports = {
  calculateHanoi
};
