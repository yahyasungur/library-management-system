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

const decrypt = (crypto: any, algorithm: any, password: any, iv: any) => {
    return function decrypt(encrypted: string) {
        try {
            let str = null;
            if (encrypted) {
                const decipher = crypto.createDecipheriv(algorithm, password, iv);
                const dec = decipher.update(encrypted, 'hex', 'utf8');
                str = dec;
            }
            if (!str) return encrypted;
            return str;
        } catch (e: any) {
            return encrypted;
        }
    };
};

export default decrypt;
