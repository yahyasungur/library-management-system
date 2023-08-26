const selectUser = (userDb: any, decrypt: Function) => {
    return async function select(info: any) {
        let data = [];
        const { id } = info; // deconstruct

        if (id) {
            // select one
            const res = await userDb.selectOne(id);
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    // push items to array
                    data.push({
                        id: e.id,
                        name: e.name ? decrypt(e.name) : null,
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt
                    });
                }
            }
        } else {
            // select all
            const res = await userDb.selectAll();
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];

                    // push items to array
                    data.push({
                        id: e.id,
                        name: e.name ? decrypt(e.name) : null,
                        createdAt: e.createdAt,
                        updatedAt: e.updatedAt
                    });
                }
            }
        }
        return data;
    };
};

export default selectUser;
