"use strict";
/**
 * Unit test for users
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
// change to test DB
beforeAll(() => {
    process.env.NODE_ENV = 'test';
});
// require functions on users
const app_1 = __importDefault(require("../../use-cases/users/app"));
describe(`Users Tests Suites`, () => {
    test(`Select Users`, () => __awaiter(void 0, void 0, void 0, function* () {
        const info = {};
        const res = yield app_1.default.selectUsers(info);
        expect(res).toBeDefined();
    }));
    test(`Add Users - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const info = {
            name: randomstring_1.default.generate({
                length: 12,
                charset: 'alphabetic'
            }) // generate random string
        };
        const res = yield app_1.default.addUsers(info);
        expect(res).toBe(`User has been added successfully.`);
    }));
    test(`Add Users - Required fields missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const info = {
                name: randomstring_1.default.generate({
                    length: 12,
                    charset: 'alphabetic'
                }) // generate random string
            };
            yield app_1.default.addUsers(info);
        }
        catch (e) {
            expect(e.toString()).toBe('Error: Please enter last name.');
        }
    }));
    test(`Delete Users.`, () => __awaiter(void 0, void 0, void 0, function* () {
        // select last added
        const info = {};
        const emp = yield app_1.default.selectUsers(info);
        const employee = emp[emp.length - 1];
        const employeeId = employee.id;
        const data = {
            id: employeeId
        };
        const res = yield app_1.default.deleteUsers(data);
        expect(res).toBe(`User deleted successfully.`);
    }));
    test(`Delete Users doesn't exist.`, () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // select last added
            const info = {};
            const emp = yield app_1.default.selectUsers(info);
            const employee = emp[emp.length - 1];
            const employeeId = employee.id;
            const data = {
                id: parseInt(employeeId) + 10 // id that never exist
            };
            yield app_1.default.deleteUsers(data);
        }
        catch (e) {
            expect(e.toString()).toBe('Error: User was not deleted, please try again.');
        }
    }));
});
