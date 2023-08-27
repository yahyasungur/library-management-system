const addBook = (makeBooks: Function, libraryDb: any) => {
    return async function post(info: Object) {
        let data = await makeBooks(info); // entity

        data = {
            name: data.getFn()
        };

        // to do checking if name already exist
        const check = await libraryDb.checkNameExistForBook(data);
        if (check.rowCount > 0) throw new Error(`Book already exist, please check.`);

        //   insert
        const res = await libraryDb.insertBook(data);
        // ##
        let msg = `Error on inserting Book, please try again.`;

        if (res) {
            msg = `Book has been added successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default addBook;
