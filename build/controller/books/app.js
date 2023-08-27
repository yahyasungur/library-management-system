"use strict";
/**
 * Book Controller
 * @param {Function} bookUC - Book Use Case
 * @returns {Object} Book Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../use-cases/books/app"));
const insert_book_1 = __importDefault(require("./insert-book"));
const select_book_1 = __importDefault(require("./select-book"));
const delete_book_1 = __importDefault(require("./delete-book"));
const bookAdds = (0, insert_book_1.default)(app_1.default.addBooks);
const bookSelects = (0, select_book_1.default)(app_1.default.selectBooks);
const bookDeletes = (0, delete_book_1.default)(app_1.default.deleteBooks);
const BookController = {
    bookAdds,
    bookSelects,
    bookDeletes
};
exports.default = BookController;
