/**
 * Connection method
 * @param dotenv - dotenv module
 * @param pg - pg module
 * @returns {Function} Connection method
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

const connect = (dotenv: any, pg: any) => {
    return async function conn() {
        dotenv.config();

        const { Pool } = pg;
        let config = null;
        const env = process.env.NODE_ENV;
        if (env == `development` || env == `production`) {
            config = {
                user: process.env.PGUSER,
                database: process.env.PGDATABASE,
                password: process.env.PGPASSWORD,
                port: process.env.PGPORT,
                host: process.env.PGHOST
            };
        }

        if (env == `test`) {
            config = {
                user: process.env.PGUSER,
                database: process.env.PGDATABASE_TEST,
                password: process.env.PGPASSWORD,
                port: process.env.PGPORT,
                host: process.env.PGHOST
            };
        }

        const pool = new Pool(config);

        return pool;
    };
};

export default connect;
