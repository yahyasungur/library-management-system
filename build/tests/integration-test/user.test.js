"use strict";
/**
 * User Test Suites - Integration Test
 * Reference: https://github.com/rodentskie
 */
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
const randomstring_1 = __importDefault(require("randomstring"));
const user_1 = __importDefault(require("./user"));
describe(`Employees Tests Suites`, () => {
    test(`Select Employees`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield user_1.default.selectUser();
        const data = res.status;
        expect(data).toBe(200);
    }));
    test(`Add Employees - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const info = {
            name: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }) // generate random string
        };
        const res = yield user_1.default.addUser(info);
        const data = res.status;
        expect(data).toBe(201);
    }));
    test(`Add Employees - Required fields missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const info = {
            name: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }) // generate random string
        };
        const res = yield user_1.default.addUser(info);
        const data = res.response.status;
        expect(data).toBe(400);
    }));
    test(`Update Employees - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield user_1.default.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            name: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }) // generate random string
        };
        const res = yield user_1.default.updateUser(id, info);
        const data = res.status;
        expect(data).toBe(200);
    }));
    test(`Update Employees - Required fields are missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield user_1.default.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            name: null
        };
        const res = yield user_1.default.updateUser(id, info);
        const data = res.response.status;
        expect(data).toBe(400);
    }));
    test(`Delete Employees`, () => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield user_1.default.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const res = yield user_1.default.removeUser(id);
        const data = res.status;
        expect(data).toBe(200);
    }));
});
