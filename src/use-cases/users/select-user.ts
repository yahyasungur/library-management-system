const selectUser = (libraryDb: any, decrypt: Function) => {
    return async function select(info: any) {
        let data = [];
        const { id } = info; // deconstruct

        if (id) {
            // select one
            const res = await libraryDb.selectOne(id);
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    const past = await libraryDb.getUserReturnedBookNameAndScore(id);
                    const present = await libraryDb.getUserBorrowedAndNotReturnedBookName(id);

                    // push items to array
                    data.push({
                        id: e.id,
                        name: e.name ? decrypt(e.name) : null,
                        books: {
                            past: past ? past.rows : [],
                            present: present ? present.rows : []
                        }
                    });
                }
            }
        } else {
            // select all
            const res = await libraryDb.selectAll();
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    // push items to array
                    data.push({
                        id: e.id,
                        name: e.name ? decrypt(e.name) : null
                    });
                }
            }
        }
        return data;
    };
};

export default selectUser;
