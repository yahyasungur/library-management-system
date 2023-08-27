"use strict";
/**
 * Make book entity
 * @param encrypt
 * @returns {Function} make
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
Object.defineProperty(exports, "__esModule", { value: true });
const makeBook = (encrypt) => {
    return function make(info) {
        const { name } = info; // deconstruct
        if (!name) {
            throw new Error('Please enter name.');
        }
        return Object.freeze({
            getFn: () => encrypt(name)
        });
    };
};
exports.default = makeBook;
