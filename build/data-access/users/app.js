"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const index_1 = __importDefault(require("../sequelize/models/index"));
// ######
const query_1 = __importDefault(require("./query"));
// ######
const userDb = (0, query_1.default)(app_1.default, index_1.default);
// ######
exports.default = userDb;
