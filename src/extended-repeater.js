const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let returnString = "";
    let keys = new Set(Object.keys(options));
    let repeatTimes = keys.has('repeatTimes') ? options.repeatTimes : 1;
    let separator = keys.has('separator') ? options.separator : "+";
    let addition = keys.has('addition') ? options.addition : "";
    let additionRepeatTimes = keys.has('additionRepeatTimes') ? options.additionRepeatTimes : 1;
    let additionSeparator = keys.has('additionSeparator') ? options.additionSeparator : "|";

    for (i = 0; i < repeatTimes; i++) {
        returnString += str;
        for (let j = 0; j < additionRepeatTimes; j++) returnString += ((j < additionRepeatTimes - 1) ? addition + additionSeparator : addition);
        returnString += ((i < repeatTimes - 1) ? separator : "");
    }
    return returnString;
}

module.exports = {
    repeater
};
