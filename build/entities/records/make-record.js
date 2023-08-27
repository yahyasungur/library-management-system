"use strict";
/**
 * Make record entity
 * @param encrypt
 * @returns {Function} make
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
Object.defineProperty(exports, "__esModule", { value: true });
const makeRecord = (encrypt) => {
    return function make(info) {
        const { bookId, bookName, userId, operation, score } = info; // deconstruct
        if (!bookId) {
            throw new Error('Please enter bookId.');
        }
        if (!userId) {
            throw new Error('Please enter userId.');
        }
        if (!operation) {
            throw new Error('Please enter operation.');
        }
        return Object.freeze({
            getFn: () => encrypt(bookName),
            getUn: () => userId,
            getOp: () => operation,
            getSc: () => score,
            getBk: () => bookId
        });
    };
};
exports.default = makeRecord;
