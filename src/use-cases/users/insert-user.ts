const addUser = (makeUsers: Function, libraryDb: any) => {
    return async function post(info: Object) {
        let data = await makeUsers(info); // entity

        data = {
            name: data.getFn()
        };

        // to do checking if name already exist
        const check = await libraryDb.checkNameExist(data);
        if (check.rowCount > 0) throw new Error(`User already exist, please check.`);

        //   insert
        const res = await libraryDb.insertUser(data);
        // ##
        let msg = `Error on inserting user, please try again.`;

        if (res) {
            msg = `User has been added successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default addUser;
