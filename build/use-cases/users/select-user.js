"use strict";
/**
 * Select user use case
 * @param {Object} libraryDb - libraryDb object
 * @param {Function} decrypt - decrypt function
 * @returns {Function} selectUser
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
const selectUser = (libraryDb, decrypt) => {
    return function select(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            const { id } = info; // deconstruct
            if (id) {
                // select one
                const res = yield libraryDb.selectOne(id);
                if (res.rowCount > 0) {
                    // only when there is data returned
                    const items = res.rows;
                    for (let i = 0; i < items.length; i++) {
                        const e = items[i];
                        const past = yield libraryDb.getUserReturnedBookNameAndScore(id);
                        const present = yield libraryDb.getUserBorrowedAndNotReturnedBookName(id);
                        // push items to array
                        data.push({
                            id: e.id,
                            name: e.name ? decrypt(e.name) : null,
                            books: {
                                past: past ? past.rows : [],
                                present: present ? present.rows : []
                            }
                        });
                    }
                }
                else {
                    throw new Error(`User doesn't exist.`);
                }
            }
            else {
                // select all
                const res = yield libraryDb.selectAll();
                if (res.rowCount > 0) {
                    // only when there is data returned
                    const items = res.rows;
                    for (let i = 0; i < items.length; i++) {
                        const e = items[i];
                        // push items to array
                        data.push({
                            id: e.id,
                            name: e.name ? decrypt(e.name) : null
                        });
                    }
                }
            }
            return data;
        });
    };
};
exports.default = selectUser;
