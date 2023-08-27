/**
 * A basic auth middleware
 * @param {Object} auth - auth object
 * @param {Object} dotenv - dotenv object
 * @returns {Function} auths
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

const myAuth = (auth: any, dotenv: any) => {
    return async function auths(req: any, res: any, next: any) {
        dotenv.config();
        const val = auth(req);
        if (!val) return res.sendStatus(403);
        if (!val.name) return res.sendStatus(403);
        if (!val.pass) return res.sendStatus(403);

        if (val.name !== process.env.name) return res.sendStatus(403);
        if (val.pass !== process.env.pass) return res.sendStatus(403);

        next();
    };
};
export default myAuth;
