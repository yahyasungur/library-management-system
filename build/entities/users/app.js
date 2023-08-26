"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../functions/app")); // functions
// ####
const make_user_1 = __importDefault(require("./make-user"));
const patch_user_1 = __importDefault(require("./patch-user"));
// ####
const makeUsers = (0, make_user_1.default)(app_1.default.enc);
const patchUsers = (0, patch_user_1.default)(app_1.default.enc);
// ####
const entity = {
    makeUsers,
    patchUsers
};
exports.default = entity;
