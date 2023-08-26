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
const addUser = (makeUsers, userDb) => {
    return function post(info) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield makeUsers(info); // entity
            data = {
                firstName: data.getFn(),
                lastName: data.getLn(),
                email: data.getEmail(),
                age: data.getAge()
            };
            // to do checking if name already exist
            const check = yield userDb.checkNameExist(data);
            if (check.rowCount > 0)
                throw new Error(`User already exist, please check.`);
            //   insert
            const res = yield userDb.insertUser(data);
            // ##
            let msg = `Error on inserting user, please try again.`;
            if (res) {
                msg = `User has been added successfully.`;
                return msg;
            }
            else {
                throw new Error(msg);
            }
        });
    };
};
exports.default = addUser;
