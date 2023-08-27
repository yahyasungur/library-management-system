/**
 * Books entity
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import _ from '../../functions/app'; // functions

import makeBook from './make-book';

const makeBooks = makeBook(_.enc);

const entity = {
    makeBooks
};

export default entity;
