"use strict";
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
const query = (conn, models) => {
    return Object.freeze({
        insertUser,
        checkNameExist,
        selectAll,
        selectOne,
        removeUser
    });
    function removeUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use sequelize on inserting
                const User = models.User;
                const res = yield User.destroy({
                    where: {
                        id
                    }
                });
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function selectAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Users";`;
                    pool.query(sql, (err, res) => {
                        pool.end(); // end connection
                        if (err)
                            resolve(err);
                        resolve(res);
                    });
                });
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function selectOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Users" WHERE id = $1;`;
                    const params = [id];
                    pool.query(sql, params, (err, res) => {
                        pool.end(); // end connection
                        if (err)
                            resolve(err);
                        resolve(res);
                    });
                });
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function checkNameExist(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const { name } = data; // deconstruct
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT id FROM "Users" WHERE "firstName" = $1;`;
                    const params = [name];
                    pool.query(sql, params, (err, res) => {
                        pool.end(); // end connection
                        if (err)
                            resolve(err);
                        resolve(res);
                    });
                });
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function insertUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use sequelize on inserting
                const User = models.User;
                const res = yield User.create(data);
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
};
exports.default = query;
