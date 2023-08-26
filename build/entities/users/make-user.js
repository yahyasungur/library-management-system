"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makeUser = (encrypt) => {
    return function make(info) {
        const { firstName, lastName, email, age } = info; // deconstruct
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
            getFn: () => encrypt(firstName),
            getLn: () => encrypt(lastName),
            getEmail: () => encrypt(email),
            getAge: () => age
        });
    };
};
exports.default = makeUser;
