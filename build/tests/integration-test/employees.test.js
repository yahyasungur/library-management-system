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
const randomstring_1 = __importDefault(require("randomstring"));
const employees_1 = __importDefault(require("./employees"));
describe(`Employees Tests Suites`, () => {
    test(`Select Employees`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield employees_1.default.selectUser();
        const data = res.status;
        expect(data).toBe(200);
    }));
    test(`Add Employees - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const info = {
            firstName: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }),
            lastName: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }),
            email: `${randomstring_1.default.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`,
            age: 13
        };
        const res = yield employees_1.default.addUser(info);
        const data = res.status;
        expect(data).toBe(201);
    }));
    test(`Add Employees - Required fields missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const info = {
            firstName: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }),
            lastName: null,
            email: `${randomstring_1.default.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`,
            age: 8
        };
        const res = yield employees_1.default.addUser(info);
        const data = res.response.status;
        expect(data).toBe(400);
    }));
    test(`Update Employees - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield employees_1.default.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            firstName: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }),
            lastName: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }),
            email: `${randomstring_1.default.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`,
            age: 9
        };
        const res = yield employees_1.default.updateUser(id, info);
        const data = res.status;
        expect(data).toBe(200);
    }));
    test(`Update Employees - Required fields are missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield employees_1.default.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            firstName: null,
            lastName: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }),
            email: `${randomstring_1.default.generate({
                length: 5,
                charset: 'alphabetic'
            })}@gmail.com`,
            age: 9
        };
        const res = yield employees_1.default.updateUser(id, info);
        const data = res.response.status;
        expect(data).toBe(400);
    }));
    test(`Delete Employees`, () => __awaiter(void 0, void 0, void 0, function* () {
        const emp = yield employees_1.default.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const res = yield employees_1.default.removeUser(id);
        const data = res.status;
        expect(data).toBe(200);
    }));
});
