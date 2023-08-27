"use strict";
/**
 * Database connection
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = __importDefault(require("pg"));
const connection_1 = __importDefault(require("./connection"));
const conn = (0, connection_1.default)(dotenv_1.default, pg_1.default);
exports.default = conn;
