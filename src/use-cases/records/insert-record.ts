/**
 * Add Record use case
 * @param {Function} makeRecords - makeRecords function
 * @param {Object} libraryDb - libraryDb object
 * @returns {Function} addRecord
 *
 * Author: Yahya Sungur
 * Date: 27.08.2023
 */

import _ from '../../functions/app';

const addRecord = (makeRecords: Function, libraryDb: any) => {
    return async function post(info: Object) {
        let data = await makeRecords(info); // entity

        // check if the user is already exist
        const isUserExist = await libraryDb.selectOne(data.getUn());
        if (isUserExist.rowCount === 0) {
            throw new Error(`User doesn't exist.`);
        }

        // check if the book is already exist
        const isBookExist = await libraryDb.selectOneBook(data.getBk());
        if (isBookExist.rowCount === 0) {
            throw new Error(`Book doesn't exist.`);
        }

        // check if the operation is borrow and the book is already borrowed
        if (data.getOp() === 'borrow') {
            const isBorrowed = await libraryDb.checkBookIsAlreadyBorrowed(data.getBk());
            if (isBorrowed.rowCount > 0) {
                throw new Error(`Book is already borrowed.`);
            }
        } else if (data.getOp() === 'return') {
            // check if there is a borrow record
            const isBorrowed = await libraryDb.isThereAnyBookBorrowed(data.getUn(), data.getBk());
            if (isBorrowed.rowCount === 0) {
                throw new Error(`Error on returning book, book didn't borrowed.`);
            }
            // delete the borrow record
            const res = await libraryDb.removeRecord(data.getUn(), data.getBk(), 'borrow');
        }

        const bookName = await libraryDb.getBookName(data.getBk());

        data = {
            userId: data.getUn(),
            bookId: data.getBk(),
            bookName: bookName ? _.dec(bookName.rows[0].name) : data.getFn(),
            operation: data.getOp(),
            score: data.getSc() ? data.getSc() : null
        };

        //   insert
        const res = await libraryDb.insertRecord(data);
        // ##
        let msg = `Error on inserting Record, please try again.`;

        if (res) {
            msg = `Record has been added successfully.`;
            return msg;
        } else {
            throw new Error(msg);
        }
    };
};

export default addRecord;
