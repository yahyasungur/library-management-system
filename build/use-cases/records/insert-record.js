"use strict";
/**
 * Add Record use case
 * @param {Function} makeRecords - makeRecords function
 * @param {Object} libraryDb - libraryDb object
 * @returns {Function} addRecord
 *
 * Author: Yahya Sungur
 * Date: 27.08.2023
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../functions/app"));
const addRecord = (makeRecords, libraryDb) => {
    return function post(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield makeRecords(info); // entity
            // check if the user is already exist
            const isUserExist = yield libraryDb.selectOne(data.getUn());
            if (isUserExist.rowCount === 0) {
                throw new Error(`User doesn't exist.`);
            }
            // check if the book is already exist
            const isBookExist = yield libraryDb.selectOneBook(data.getBk());
            if (isBookExist.rowCount === 0) {
                throw new Error(`Book doesn't exist.`);
            }
            // check if the operation is borrow and the book is already borrowed
            if (data.getOp() === 'borrow') {
                const isBorrowed = yield libraryDb.checkBookIsAlreadyBorrowed(data.getBk());
                if (isBorrowed.rowCount > 0) {
                    throw new Error(`Book is already borrowed.`);
                }
            }
            else if (data.getOp() === 'return') {
                // check if there is a borrow record
                const isBorrowed = yield libraryDb.isThereAnyBookBorrowed(data.getUn(), data.getBk());
                if (isBorrowed.rowCount === 0) {
                    throw new Error(`Error on returning book, book didn't borrowed.`);
                }
                // delete the borrow record
                const res = yield libraryDb.removeRecord(data.getUn(), data.getBk(), 'borrow');
            }
            const bookName = yield libraryDb.getBookName(data.getBk());
            data = {
                userId: data.getUn(),
                bookId: data.getBk(),
                bookName: bookName ? app_1.default.dec(bookName.rows[0].name) : data.getFn(),
                operation: data.getOp(),
                score: data.getSc() ? data.getSc() : null
            };
            //   insert
            const res = yield libraryDb.insertRecord(data);
            // ##
            let msg = `Error on inserting Record, please try again.`;
            if (res) {
                msg = `Record has been added successfully.`;
                return msg;
            }
            else {
                throw new Error(msg);
            }
        });
    };
};
exports.default = addRecord;
