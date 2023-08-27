/**
 * Book Delete Controller
 * @param {Function} deleteBooks - Delete Book Use Case
 * @returns {Object} Book Delete Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

const bookDelete = (deleteBooks: Function) => {
    return async function get(httpRequest: any) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            //get the httprequest body
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers['User-Agent'];
            if (httpRequest.headers['Referer']) {
                source.referrer = httpRequest.headers['Referer'];
            }
            const toRemove = {
                ...info,
                source,
                id: httpRequest.params.id // when id is passed
            };
            const view = await deleteBooks(toRemove);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: { view }
            };
        } catch (e: any) {
            // TODO: Error logging
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    };
};

export default bookDelete;
