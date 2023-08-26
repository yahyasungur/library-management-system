"use strict";
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
