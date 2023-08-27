const deleteRecord = (libraryDb: any) => {
    return async function select(info: any) {
        const { userId, bookId, operation } = info;

        // delete query
        const res = await libraryDb.removeRecord(userId, bookId, operation);
        let msg = `Record was not deleted, please try again.`;
        if (res == 1) {
            msg = `Record deleted successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default deleteRecord;
