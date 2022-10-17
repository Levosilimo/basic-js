const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    isDirect = false;
    constructor(isDirect) {
        this.isDirect=!isDirect;
    }

    encrypt(message, key) {
        return this.common(message,key,true);
    }

    decrypt(encryptedMessage, key) {
        return this.common(encryptedMessage,key,false);
    }

    common(message,key,isEncryption){
        if (typeof message != 'string' || message.length === 0 || typeof key != 'string' || key.length === 0) throw new Error('Incorrect arguments!');
        message = message.toUpperCase();
        key = key.toUpperCase();
        let resultString = "";
        let i = 0;
        let shift = 0;
        while (i < message.length) {
            if (/^[A-Z]$/.test(message[i])) {
                let keyCounter = (i - shift) % key.length;
                let replacingChar = message.charCodeAt(i) + ((isEncryption?1:-1)*(key.charCodeAt(keyCounter) - 65));
                if (replacingChar < 65 || replacingChar > 90) replacingChar = (isEncryption? (replacingChar % 91) + 65 : 90 - (64 - (replacingChar % 65)));
                resultString += String.fromCharCode(replacingChar);
            } else {
                resultString += message[i];
                shift++;
            }
            i++;
        }
        return this.isDirect? resultString : resultString.split("").reverse().join("");
    }
}

module.exports = {
    VigenereCipheringMachine
};
