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
Object.defineProperty(exports, "__esModule", { value: true });
const myAuth = (auth, dotenv) => {
    return function auths(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            dotenv.config();
            const val = auth(req);
            if (!val)
                return res.sendStatus(403);
            if (!val.name)
                return res.sendStatus(403);
            if (!val.pass)
                return res.sendStatus(403);
            if (val.name !== process.env.name)
                return res.sendStatus(403);
            if (val.pass !== process.env.pass)
                return res.sendStatus(403);
            next();
        });
    };
};
exports.default = myAuth;
