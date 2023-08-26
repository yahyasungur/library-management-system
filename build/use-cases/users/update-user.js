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
const updateUser = (userDb, patchUsers) => {
    return function put(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = patchUsers(info);
            data = {
                id: data.getId(),
                firstName: data.getFn(),
                lastName: data.getLn(),
                email: data.getEmail(),
                age: data.getAge()
            };
            // check id if employee exist
            const checkId = yield userDb.selectOne(data.id);
            if (checkId.rowCount == 0)
                throw new Error(`User doesn't exist, please check.`);
            // check if name exist
            const check = yield userDb.checkNameExistUpdate(data);
            if (check.rowCount > 0)
                throw new Error(`User already exist, please check.`);
            // update
            const res = yield userDb.patchUser(data);
            let msg = `User was not updated, please try again`;
            if (res[0] == 1) {
                msg = `User updated successfully.`;
                return msg;
            }
            else {
                throw new Error(msg);
            }
        });
    };
};
exports.default = updateUser;
