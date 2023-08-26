"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = `${process.env.BASE_URL}:${process.env.TEST_PORT}`;
const routes = () => {
    return Object.freeze({
        selectUser,
        addUser,
        updateUser,
        removeUser
    });
    function selectUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, axios_1.default)({
                    method: 'GET',
                    url: `${url}/api/users`,
                    auth: {
                        username: process.env.name,
                        password: process.env.pass
                    }
                });
                return res;
            }
            catch (e) {
                return e;
            }
        });
    }
    function addUser(info) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, axios_1.default)({
                    method: 'POST',
                    url: `${url}/api/users`,
                    auth: {
                        username: process.env.name,
                        password: process.env.pass
                    },
                    data: Object.assign({}, info)
                });
                return res;
            }
            catch (e) {
                return e;
            }
        });
    }
    function updateUser(id, info) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, axios_1.default)({
                    method: 'PATCH',
                    url: `${url}/api/users/${id}`,
                    auth: {
                        username: process.env.name,
                        password: process.env.pass
                    },
                    data: Object.assign({}, info)
                });
                return res;
            }
            catch (e) {
                return e;
            }
        });
    }
    function removeUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield (0, axios_1.default)({
                    method: 'DELETE',
                    url: `${url}/api/users/${id}`,
                    auth: {
                        username: process.env.name,
                        password: process.env.pass
                    }
                });
                return res;
            }
            catch (e) {
                return e;
            }
        });
    }
};
const route = routes();
exports.default = route;
