"use strict";
/**
 * Delete book use case
 * @param {Object} libraryDb - libraryDb object
 * @returns {Function} deleteBook
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
const deleteBook = (libraryDb) => {
    return function select(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = info;
            // delete query
            const res = yield libraryDb.removeBook(id);
            let msg = `Book was not deleted, please try again.`;
            if (res == 1) {
                msg = `Book deleted successfully.`;
                return msg;
            }
            else {
                throw new Error(msg);
            }
        });
    };
};
exports.default = deleteBook;
