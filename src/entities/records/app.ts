import _ from '../../functions/app'; // functions

// ####
import makeRecord from './make-record';
import patchRecord from './patch-record';
// ####
const makeRecords = makeRecord(_.enc);
const patchRecords = patchRecord(_.enc);
// ####

const entity = {
    makeRecords,
    patchRecords
};

export default entity;
