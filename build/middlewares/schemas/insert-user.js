"use strict";
/**
 * Insert user schema
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const insertUserSchema = joi_1.default.object({
    name: joi_1.default.string().required()
});
exports.default = insertUserSchema;
