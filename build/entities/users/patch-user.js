"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patchUser = (encrypt) => {
    return function make(info) {
        const { id, firstName, lastName, email, age } = info; // deconstruct
        if (!id) {
            throw new Error('Please enter ID of employee.');
        }
        if (!firstName) {
            throw new Error('Please enter first name.');
        }
        if (!lastName) {
            throw new Error('Please enter last name.');
        }
        if (!email) {
            throw new Error('Please enter email.');
        }
        if (age == null) {
            throw new Error('Please enter age.');
        }
        return Object.freeze({
            getId: () => id,
            getFn: () => encrypt(firstName),
            getLn: () => encrypt(lastName),
            getEmail: () => encrypt(email),
            getAge: () => age
        });
    };
};
exports.default = patchUser;
