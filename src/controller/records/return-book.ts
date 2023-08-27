/**
 * Record Return Book Controller
 * @param {Function} addRecords - Add Record Use Case
 * @returns {Object} Record Return Book Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

const bookReturn = (addRecords: Function) => {
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
                operation: 'return'
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

export default bookReturn;
