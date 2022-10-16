const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  allDepth = 0;
  calculateDepth(arr, depth = -1) {
    if(depth === -1) this.allDepth = 1, depth = 1;
    if (depth > this.allDepth) this.allDepth = depth;
    arr.forEach(element => {if(Array.isArray(element)) this.calculateDepth(element, depth + 1);});
    return this.allDepth;
  }
}

module.exports = {
  DepthCalculator
};
