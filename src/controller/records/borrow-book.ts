const bookBorrow = (addRecords: Function) => {
    return async function post(httpRequest: any) {
        try {
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers['User-Agent'];
            if (httpRequest.headers['Referer']) {
                source.referrer = httpRequest.headers['Referer'];
            }

            const posted = await addRecords({
                ...info,
                source,
                userId: httpRequest.params.userId,
                bookId: httpRequest.params.bookId,
                operation: 'borrow'
            });
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: { posted }
            };
        } catch (e: any) {
            // TODO: Error logging
            console.log(e);

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    };
};

export default bookBorrow;
