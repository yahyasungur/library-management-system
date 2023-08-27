"use strict";
/**
 * Select record use case
 * @param {Object} libraryDb - libraryDb object
 * @param {Function} decrypt - decrypt function
 * @returns {Function} selectRecord
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
Object.defineProperty(exports, "__esModule", { value: true });
const selectRecord = (libraryDb, decrypt) => {
    return function select(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            // select all
            const res = yield libraryDb.selectAllBooks();
            if (res.rowCount > 0) {
                // only when there is data returned
                const items = res.rows;
                for (let i = 0; i < items.length; i++) {
                    const e = items[i];
                    // push items to array
                    data.push({
                        userId: decrypt(e.user_id),
                        bookId: decrypt(e.book_id),
                        bookName: decrypt(e.book_name),
                        operation: decrypt(e.operation),
                        score: decrypt(e.score),
                        createdAt: e.created_at,
                        updatedAt: e.updated_at
                    });
                }
            }
            return data;
        });
    };
};
exports.default = selectRecord;
