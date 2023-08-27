/**
 * Make book entity
 * @param encrypt
 * @returns {Function} make
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

const makeBook = (encrypt: Function) => {
    return function make(info: any) {
        const { name } = info; // deconstruct
        if (!name) {
            throw new Error('Please enter name.');
        }
        return Object.freeze({
            getFn: () => encrypt(name)
        });
    };
};

export default makeBook;
