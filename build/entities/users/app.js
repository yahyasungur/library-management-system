"use strict";
/**
 * User entity
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../functions/app")); // functions
const make_user_1 = __importDefault(require("./make-user"));
const makeUsers = (0, make_user_1.default)(app_1.default.enc);
const entity = {
    makeUsers
};
exports.default = entity;
