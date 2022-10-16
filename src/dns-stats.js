const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let returnObject = {};
  for(let domain of domains){
    let DNSes = domain.split(".").reverse();
    let objectDNS = "";
    for (let DNS of DNSes){
      objectDNS+="."+DNS;
      returnObject[objectDNS] = (undefined === returnObject[objectDNS]) ? 1 : returnObject[objectDNS]+1;
    }
  }
  return returnObject;
}

module.exports = {
  getDNSStats
};
