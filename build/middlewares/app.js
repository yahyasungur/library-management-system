"use strict";
/**
 * Auth validation middleware for future use
 * @param {Object} auth - auth object
 * @param {Object} dotenv - dotenv object
 * @returns {Function} validateAuth
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_auth_1 = __importDefault(require("basic-auth"));
const dotenv_1 = __importDefault(require("dotenv"));
const basic_auth_2 = __importDefault(require("./basic-auth"));
const validateAuth = (0, basic_auth_2.default)(basic_auth_1.default, dotenv_1.default);
exports.default = validateAuth;
