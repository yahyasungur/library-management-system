const query = (conn: any, models: any) => {
    return Object.freeze({
        insertUser,
        checkNameExist,
        selectAll,
        selectOne,
        removeUser,
        insertBook,
        checkNameExistForBook,
        selectAllBooks,
        selectOneBook,
        removeBook
    });

    async function removeUser(id: string) {
        try {
            // use sequelize on inserting
            const User = models.User;
            const res = await User.destroy({
                where: {
                    id
                }
            });
            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function selectAll() {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users";`;
                pool.query(sql, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function selectOne(id: number) {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Users" WHERE id = $1;`;
                const params = [id];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function checkNameExist(data: any) {
        try {
            const pool = await conn();

            const { name } = data; // deconstruct

            const res = await new Promise((resolve) => {
                const sql = `SELECT id FROM "Users" WHERE "name" = $1;`;
                const params = [name];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function insertUser(data: Object) {
        try {
            // use sequelize on inserting
            const User = models.User;
            const res = await User.create(data);
            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function removeBook(id: string) {
        try {
            // use sequelize on inserting
            const Book = models.Book;
            const res = await Book.destroy({
                where: {
                    id
                }
            });
            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function selectAllBooks() {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Books";`;
                pool.query(sql, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function selectOneBook(id: number) {
        try {
            const pool = await conn();

            const res = await new Promise((resolve) => {
                const sql = `SELECT * FROM "Books" WHERE id = $1;`;
                const params = [id];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function checkNameExistForBook(data: any) {
        try {
            const pool = await conn();

            const { name } = data; // deconstruct

            const res = await new Promise((resolve) => {
                const sql = `SELECT id FROM "Books" WHERE "name" = $1;`;
                const params = [name];
                pool.query(sql, params, (err: Error, res: Response) => {
                    pool.end(); // end connection

                    if (err) resolve(err);
                    resolve(res);
                });
            });

            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }

    async function insertBook(data: Object) {
        try {
            // use sequelize on inserting
            const Book = models.Book;
            const res = await Book.create(data);
            return res;
        } catch (e: any) {
            console.log('Error: ', e);
        }
    }
};

export default query;