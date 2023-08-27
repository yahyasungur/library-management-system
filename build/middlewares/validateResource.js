"use strict";
/**
 * Validate resource middleware
 * @param {Object} schema - schema object
 * @returns {Function} validate
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
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
Object.defineProperty(exports, "__esModule", { value: true });
const validate = (schema) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { error, value } = schema.validate(req.body);
            if (error) {
                console.log(error);
                return res.status(400).send('Invalid request.');
            }
            next();
        }
        catch (error) {
            console.log(error);
            return res.status(400).send('Invalid request.');
        }
    });
};
exports.default = validate;
