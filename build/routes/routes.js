"use strict";
/**
 * Routes
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../controller/users/app"));
const app_2 = __importDefault(require("../controller/books/app"));
const app_3 = __importDefault(require("../controller/records/app"));
const validateResource_1 = __importDefault(require("../middlewares/validateResource"));
const insert_book_1 = __importDefault(require("../middlewares/schemas/insert-book"));
const insert_user_1 = __importDefault(require("../middlewares/schemas/insert-user"));
const return_book_1 = __importDefault(require("../middlewares/schemas/return-book"));
const route = (router, makeExpressCallback, validateAuth) => {
    // GET
    // User
    router.get('/users/', makeExpressCallback(app_1.default.userSelects));
    router.get('/users/:id', makeExpressCallback(app_1.default.userSelects));
    // Book
    router.get('/books/', makeExpressCallback(app_2.default.bookSelects));
    router.get('/books/:id', makeExpressCallback(app_2.default.bookSelects));
    // Record
    router.get('/records/', makeExpressCallback(app_3.default.recordSelects));
    // POST
    // add new user
    router.post('/users', (0, validateResource_1.default)(insert_user_1.default), makeExpressCallback(app_1.default.userAdds));
    // add new book
    router.post('/books', (0, validateResource_1.default)(insert_book_1.default), makeExpressCallback(app_2.default.bookAdds));
    // book borrow
    router.post('/users/:userId/borrow/:bookId', makeExpressCallback(app_3.default.bookBorrows));
    // book return
    router.post('/users/:userId/return/:bookId', (0, validateResource_1.default)(return_book_1.default), makeExpressCallback(app_3.default.bookReturns));
    // DELETE
    // delete user
    router.delete('/users/:id', makeExpressCallback(app_1.default.userDeletes));
    // delete book
    router.delete('/books/:id', makeExpressCallback(app_2.default.bookDeletes));
    return router;
};
exports.default = route;
