"use strict";
/**
 * Records entity
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../functions/app")); // functions
const make_record_1 = __importDefault(require("./make-record"));
const makeRecords = (0, make_record_1.default)(app_1.default.enc);
const entity = {
    makeRecords
};
exports.default = entity;
