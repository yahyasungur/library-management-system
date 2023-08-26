"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../use-cases/users/app"));
// #####
const insert_user_1 = __importDefault(require("./insert-user"));
const select_user_1 = __importDefault(require("./select-user"));
const update_user_1 = __importDefault(require("./update-user"));
const delete_user_1 = __importDefault(require("./delete-user"));
// #####
const userAdds = (0, insert_user_1.default)(app_1.default.addUsers);
const userSelects = (0, select_user_1.default)(app_1.default.selectUsers);
const usersUpdates = (0, update_user_1.default)(app_1.default.updateUsers);
const userDeletes = (0, delete_user_1.default)(app_1.default.deleteUsers);
// #####
const userController = {
    userAdds,
    userSelects,
    usersUpdates,
    userDeletes
};
exports.default = userController;
