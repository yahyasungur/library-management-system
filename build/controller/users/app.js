"use strict";
/**
 * User Controller
 * @param {Function} userUC - User Use Case
 * @returns {Object} User Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../use-cases/users/app"));
const insert_user_1 = __importDefault(require("./insert-user"));
const select_user_1 = __importDefault(require("./select-user"));
const delete_user_1 = __importDefault(require("./delete-user"));
const userAdds = (0, insert_user_1.default)(app_1.default.addUsers);
const userSelects = (0, select_user_1.default)(app_1.default.selectUsers);
const userDeletes = (0, delete_user_1.default)(app_1.default.deleteUsers);
const userController = {
    userAdds,
    userSelects,
    userDeletes
};
exports.default = userController;
