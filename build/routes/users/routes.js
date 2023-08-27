"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../controller/users/app"));
const route = (router, makeExpressCallback, validateAuth) => {
    // GET
    router.get('/users/', validateAuth, makeExpressCallback(app_1.default.userSelects));
    router.get('/users/:id', validateAuth, makeExpressCallback(app_1.default.userSelects));
    // POST
    // add new employee
    router.post('/users', validateAuth, makeExpressCallback(app_1.default.userAdds));
    // #####
    // DELETE
    router.delete('/users/:id', validateAuth, makeExpressCallback(app_1.default.userDeletes));
    return router;
};
exports.default = route;
