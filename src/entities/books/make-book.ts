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
