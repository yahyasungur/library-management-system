"use strict";
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
const selectUser = (userDb, decrypt) => {
    return function select(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            const { id } = info; // deconstruct
            if (id) {
                // select one
                const res = yield userDb.selectOne(id);
                if (res.rowCount > 0) {
                    // only when there is data returned
                    const items = res.rows;
                    for (let i = 0; i < items.length; i++) {
                        const e = items[i];
                        // push items to array
                        data.push({
                            id: e.id,
                            firstName: e.firstName ? decrypt(e.firstName) : null,
                            lastName: e.lastName ? decrypt(e.lastName) : null,
                            email: e.lastName ? decrypt(e.email) : null,
                            age: e.age ? e.age : 0,
                            createdAt: e.createdAt,
                            updatedAt: e.updatedAt
                        });
                    }
                }
            }
            else {
                // select all
                const res = yield userDb.selectAll();
                if (res.rowCount > 0) {
                    // only when there is data returned
                    const items = res.rows;
                    for (let i = 0; i < items.length; i++) {
                        const e = items[i];
                        // push items to array
                        data.push({
                            id: e.id,
                            firstName: e.firstName ? decrypt(e.firstName) : null,
                            lastName: e.lastName ? decrypt(e.lastName) : null,
                            email: e.lastName ? decrypt(e.email) : null,
                            age: e.age ? e.age : 0,
                            createdAt: e.createdAt,
                            updatedAt: e.updatedAt
                        });
                    }
                }
            }
            return data;
        });
    };
};
exports.default = selectUser;
