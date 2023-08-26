"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patchUser = (encrypt) => {
    return function make(info) {
        const { id, name } = info; // deconstruct
        if (!id) {
            throw new Error('Please enter ID of employee.');
        }
        if (!name) {
            throw new Error('Please enter name.');
        }
        return Object.freeze({
            getId: () => id,
            getFn: () => encrypt(name)
        });
    };
};
exports.default = patchUser;
