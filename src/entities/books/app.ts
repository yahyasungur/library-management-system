import _ from '../../functions/app'; // functions

// ####
import makeBook from './make-book';
import patchBook from './patch-book';
// ####
const makeBooks = makeBook(_.enc);
const patchBooks = patchBook(_.enc);
// ####

const entity = {
    makeBooks,
    patchBooks
};

export default entity;
