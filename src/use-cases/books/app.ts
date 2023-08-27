/**
 * Book use case
 * @param {Object} entity - entity object
 * @param {Object} libraryDb - libraryDb object
 * @param {Object} _ - _ object
 * @returns {Object} bookUC
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import entity from '../../entities/books/app';
import libraryDb from '../../data-access/repository/app';
import _ from '../../functions/app';

import addBook from './insert-book';
import selectBook from './select-book';
import deleteBook from './delete-book';

const addBooks = addBook(entity.makeBooks, libraryDb);
const selectBooks = selectBook(libraryDb, _.dec);
const deleteBooks = deleteBook(libraryDb);

// Book use case
const bookUC = {
    addBooks,
    selectBooks,
    deleteBooks
};

export default bookUC;
