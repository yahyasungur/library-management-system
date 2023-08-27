"use strict";
/**
 * Book use case
 * @param {Object} entity - entity object
 * @param {Object} libraryDb - libraryDb object
 * @param {Object} _ - _ object
 * @returns {Object} bookUC
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../entities/books/app"));
const app_2 = __importDefault(require("../../data-access/repository/app"));
const app_3 = __importDefault(require("../../functions/app"));
const insert_book_1 = __importDefault(require("./insert-book"));
const select_book_1 = __importDefault(require("./select-book"));
const delete_book_1 = __importDefault(require("./delete-book"));
const addBooks = (0, insert_book_1.default)(app_1.default.makeBooks, app_2.default);
const selectBooks = (0, select_book_1.default)(app_2.default, app_3.default.dec);
const deleteBooks = (0, delete_book_1.default)(app_2.default);
// Book use case
const bookUC = {
    addBooks,
    selectBooks,
    deleteBooks
};
exports.default = bookUC;
