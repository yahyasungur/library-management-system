/**
 * User Select Controller
 * @param {Function} selectUsers - Select User Use Case
 * @returns {Object} User Select Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

const userSelect = (selectUsers: Function) => {
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
            const toView = {
                ...info,
                source,
                id: httpRequest.params.id // when id is passed
            };
            const view = await selectUsers(toView);
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

export default userSelect;
