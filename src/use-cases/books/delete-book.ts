const deleteBook = (libraryDb: any) => {
    return async function select(info: any) {
        const { id } = info;

        // delete query
        const res = await libraryDb.removeBook(id);
        let msg = `Book was not deleted, please try again.`;
        if (res == 1) {
            msg = `Book deleted successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default deleteBook;
