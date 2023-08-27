"use strict";
/**
 * Decrypts a string
 * @param {any} crypto - Crypto module
 * @param {any} algorithm - Algorithm
 * @param {any} password - Password
 * @param {any} iv - IV
 * @returns {Function} Decrypt function
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
Object.defineProperty(exports, "__esModule", { value: true });
const decrypt = (crypto, algorithm, password, iv) => {
    return function decrypt(encrypted) {
        try {
            let str = null;
            if (encrypted) {
                const decipher = crypto.createDecipheriv(algorithm, password, iv);
                const dec = decipher.update(encrypted, 'hex', 'utf8');
                str = dec;
            }
            if (!str)
                return encrypted;
            return str;
        }
        catch (e) {
            return encrypted;
        }
    };
};
exports.default = decrypt;
