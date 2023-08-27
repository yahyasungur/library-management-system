"use strict";
/**
 * Add Book use case
 * @param {Function} makeBooks - makeBooks function
 * @param {Object} libraryDb - libraryDb object
 * @returns {Function} addBook
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
const addBook = (makeBooks, libraryDb) => {
    return function post(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield makeBooks(info); // entity
            data = {
                name: data.getFn()
            };
            // to do checking if name already exist
            const check = yield libraryDb.checkNameExistForBook(data);
            if (check.rowCount > 0)
                throw new Error(`Book already exist, please check.`);
            //   insert
            const res = yield libraryDb.insertBook(data);
            // ##
            let msg = `Error on inserting Book, please try again.`;
            if (res) {
                msg = `Book has been added successfully.`;
                return msg;
            }
            else {
                throw new Error(msg);
            }
        });
    };
};
exports.default = addBook;
