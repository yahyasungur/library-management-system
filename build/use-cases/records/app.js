"use strict";
/**
 * Records use case
 * @param {Object} entity - entity object
 * @param {Object} libraryDb - libraryDb object
 * @param {Object} _ - _ object
 * @returns {Object} RecordUC
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../entities/records/app"));
const app_2 = __importDefault(require("../../data-access/repository/app"));
const app_3 = __importDefault(require("../../functions/app"));
const insert_record_1 = __importDefault(require("./insert-record"));
const select_record_1 = __importDefault(require("./select-record"));
const delete_record_1 = __importDefault(require("./delete-record"));
const addRecords = (0, insert_record_1.default)(app_1.default.makeRecords, app_2.default);
const selectRecords = (0, select_record_1.default)(app_2.default, app_3.default.dec);
const deleteRecords = (0, delete_record_1.default)(app_2.default);
// Book use case
const RecordUC = {
    addRecords,
    selectRecords,
    deleteRecords
};
exports.default = RecordUC;
