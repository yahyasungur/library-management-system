const patchRecord = (encrypt: Function) => {
    return function make(info: any) {
        const {id, bookId, bookName, userId, operation, score} = info; // deconstruct
        if (!id) {
            throw new Error('Please enter id.');
        }
        if (!bookId) {
            throw new Error('Please enter bookId.');
        }
        if (!userId) {
            throw new Error('Please enter userId.');
        }
        if (!operation) {
            throw new Error('Please enter operation.');
        }
        if (!score) {
            throw new Error('Please enter score.');
        }
        return Object.freeze({
            getId: () => id,
            getFn: () => encrypt(bookName),
            getUn: () => userId,
            getOp: () => encrypt(operation),
            getSc: () => score,
            getBk: () => bookId,
        });
    };
};

export default patchRecord;
