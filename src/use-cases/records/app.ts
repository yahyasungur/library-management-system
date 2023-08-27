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

import entity from '../../entities/records/app';
import libraryDb from '../../data-access/repository/app';
import _ from '../../functions/app';

import addRecord from './insert-record';
import selectRecord from './select-record';
import deleteRecord from './delete-record';

const addRecords = addRecord(entity.makeRecords, libraryDb);
const selectRecords = selectRecord(libraryDb, _.dec);
const deleteRecords = deleteRecord(libraryDb);

// Book use case
const RecordUC = {
    addRecords,
    selectRecords,
    deleteRecords
};

export default RecordUC;
