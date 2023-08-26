"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const algorithm = process.env.ALGORITHM;
const password = process.env.ENCRYPTION_KEY;
const iv = process.env.IV;
// ########
const encrypt_1 = __importDefault(require("./encrypt"));
const decrypt_1 = __importDefault(require("./decrypt"));
// ########
const enc = (0, encrypt_1.default)(crypto_1.default, algorithm, password, iv);
const dec = (0, decrypt_1.default)(crypto_1.default, algorithm, password, iv);
// ########
const _ = {
    enc,
    dec
};
exports.default = _;
