const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains = this.chains.concat(value);
    return this;
  },
  removeLink(position) {
    if(typeof position != 'number' || position > this.chains.length || position < 1) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    position--;
    this.chains = this.chains.filter((it, i) => i !== position);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let output = this.chains.map((it, i) => `( ${it} )`).join('~~');
    this.chains = [];
    return output;
  }
};

module.exports = {
  chainMaker
};
