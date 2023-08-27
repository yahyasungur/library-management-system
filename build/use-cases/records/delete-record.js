"use strict";
/**
 * Delete record use case
 * @param {Object} libraryDb - libraryDb object
 * @returns {Function} deleteRecord
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
const deleteRecord = (libraryDb) => {
    return function select(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, bookId, operation } = info;
            // delete query
            const res = yield libraryDb.removeRecord(userId, bookId, operation);
            let msg = `Record was not deleted, please try again.`;
            if (res == 1) {
                msg = `Record deleted successfully.`;
                return msg;
            }
            else {
                throw new Error(msg);
            }
        });
    };
};
exports.default = deleteRecord;
