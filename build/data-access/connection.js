"use strict";
/**
 * Connection method
 * @param dotenv - dotenv module
 * @param pg - pg module
 * @returns {Function} Connection method
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect = (dotenv, pg) => {
    return function conn() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    };
};
exports.default = connect;
