"use strict";
/**
 * Routes
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const app_1 = __importDefault(require("../express-callback/app"));
const app_2 = __importDefault(require("../middlewares/app"));
const routes_1 = __importDefault(require("./routes"));
const routes = (0, routes_1.default)(router, app_1.default, app_2.default);
module.exports = routes;
