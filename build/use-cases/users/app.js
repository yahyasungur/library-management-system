"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../entities/users/app"));
const app_2 = __importDefault(require("../../data-access/users/app"));
const app_3 = __importDefault(require("../../functions/app"));
// ####
const insert_user_1 = __importDefault(require("./insert-user"));
const select_user_1 = __importDefault(require("./select-user"));
const update_user_1 = __importDefault(require("./update-user"));
const delete_user_1 = __importDefault(require("./delete-user"));
// ####
const addUsers = (0, insert_user_1.default)(app_1.default.makeUsers, app_2.default);
const selectUsers = (0, select_user_1.default)(app_2.default, app_3.default.dec);
const updateUsers = (0, update_user_1.default)(app_2.default, app_1.default.patchUsers);
const deleteUsers = (0, delete_user_1.default)(app_2.default);
// ####
// user use case
const userUC = {
    addUsers,
    selectUsers,
    updateUsers,
    deleteUsers
};
exports.default = userUC;
