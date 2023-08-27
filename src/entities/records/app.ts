/**
 * Records entity
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import _ from '../../functions/app'; // functions

import makeRecord from './make-record';

const makeRecords = makeRecord(_.enc);

const entity = {
    makeRecords
};

export default entity;
