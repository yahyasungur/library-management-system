"use strict";
/**
 * Queries to database
 * @param {Object} conn - connection to database
 * @param {Object} models - sequelize models
 * @returns {Object} Query result
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
const query = (conn, models) => {
    return Object.freeze({
        insertUser,
        checkNameExist,
        selectAll,
        selectOne,
        removeUser,
        insertBook,
        checkNameExistForBook,
        selectAllBooks,
        selectOneBook,
        removeBook,
        insertRecord,
        removeRecord,
        selectAllRecords,
        calculateAvarageScoreOfBook,
        getUserReturnedBookNameAndScore,
        getUserBorrowedAndNotReturnedBookName,
        checkBookIsAlreadyBorrowed,
        getBookName,
        isThereAnyBookBorrowed
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
                    const sql = `SELECT id FROM "Users" WHERE "name" = $1;`;
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
    function removeBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use sequelize on inserting
                const Book = models.Book;
                const res = yield Book.destroy({
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
    function selectAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Books";`;
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
    function selectOneBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Books" WHERE id = $1;`;
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
    function checkNameExistForBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const { name } = data; // deconstruct
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT id FROM "Books" WHERE "name" = $1;`;
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
    function insertBook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use sequelize on inserting
                const Book = models.Book;
                const res = yield Book.create(data);
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function getBookName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT "name" FROM "Books" WHERE id = $1;`;
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
    function removeRecord(userId, bookId, operation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use sequelize on inserting
                const Record = models.Record;
                const res = yield Record.destroy({
                    where: {
                        userId,
                        bookId,
                        operation
                    }
                });
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function isThereAnyBookBorrowed(userId, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Records" WHERE "userId" = $1 AND "bookId" = $2 AND "operation" = 'borrow';`;
                    const params = [userId, bookId];
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
    function insertRecord(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // use sequelize on inserting
                const Record = models.Record;
                const res = yield Record.create(data);
                return res;
            }
            catch (e) {
                console.log('Error: ', e);
            }
        });
    }
    function selectAllRecords() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Records";`;
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
    function calculateAvarageScoreOfBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT AVG(score) FROM "Records" WHERE "bookId" = $1 AND "operation" = 'return';`;
                    const params = [bookId];
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
    function getUserReturnedBookNameAndScore(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT "bookName", "score" FROM "Records" WHERE "userId" = $1 AND "operation" = 'return';`;
                    const params = [userId];
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
    function getUserBorrowedAndNotReturnedBookName(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT "bookName" FROM "Records" WHERE "userId" = $1 AND "operation" = 'borrow';`;
                    const params = [userId];
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
    function checkBookIsAlreadyBorrowed(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield conn();
                const res = yield new Promise((resolve) => {
                    const sql = `SELECT * FROM "Records" WHERE "bookId" = $1 AND "operation" = 'borrow';`;
                    const params = [bookId];
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
};
exports.default = query;
