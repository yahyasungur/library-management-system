"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeUser = (encrypt) => {
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
exports.default = makeUser;
