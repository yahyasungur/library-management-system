"use strict";
/**
 * Records Controller
 * @param {Function} recordUC - Record Use Case
 * @returns {Object} Record Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../use-cases/records/app"));
const borrow_book_1 = __importDefault(require("./borrow-book"));
const return_book_1 = __importDefault(require("./return-book"));
const select_record_1 = __importDefault(require("./select-record"));
const bookBorrows = (0, borrow_book_1.default)(app_1.default.addRecords);
const bookReturns = (0, return_book_1.default)(app_1.default.addRecords);
const recordSelects = (0, select_record_1.default)(app_1.default.selectRecords);
const RecordController = {
    bookBorrows,
    bookReturns,
    recordSelects
};
exports.default = RecordController;
