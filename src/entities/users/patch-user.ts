const patchUser = (encrypt: Function) => {
    return function make(info: any) {
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

export default patchUser;
