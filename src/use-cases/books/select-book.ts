const selectBook = (libraryDb: any, decrypt: Function) => {
    return async function select(info: any) {
        let data = [];
        const { id } = info; // deconstruct

        if (id) {
            // select one
            const res = await libraryDb.selectOneBook(id);
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    const res2 = await libraryDb.calculateAvarageScoreOfBook(id);

                    // push items to array
                    data.push({
                        id: e.id,
                        name: e.name ? decrypt(e.name) : null,
                        score: res2.rows[0].avg ? parseFloat(res2.rows[0].avg).toFixed(2) : -1
                    });
                }
            }
        } else {
            // select all
            const res = await libraryDb.selectAllBooks();
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

export default selectBook;
