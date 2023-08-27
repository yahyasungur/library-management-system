const selectRecord = (libraryDb: any, decrypt: Function) => {
    return async function select(info: any) {
        let data = [];
            // select all
        const res = await libraryDb.selectAllBooks();
        if (res.rowCount > 0) {
            // only when there is data returned
            const items = res.rows;
            for (let i = 0; i < items.length; i++) {
                const e = items[i];

                // push items to array
                data.push({
                    userId: decrypt(e.user_id),
                    bookId: decrypt(e.book_id),
                    bookName: decrypt(e.book_name),
                    operation: decrypt(e.operation),
                    score: decrypt(e.score),
                    createdAt: e.created_at,
                    updatedAt: e.updated_at
                });
            }
        }
        
        return data;
    };
};

export default selectRecord;
