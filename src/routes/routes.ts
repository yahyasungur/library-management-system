/**
 * Routes
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import userController from '../controller/users/app';
import bookController from '../controller/books/app';
import recordController from '../controller/records/app';
import validate from '../middlewares/validateResource';
import insertBookSchema from '../middlewares/schemas/insert-book';
import insertUserSchema from '../middlewares/schemas/insert-user';
import returnBookSchema from '../middlewares/schemas/return-book';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    // GET
    // User
    router.get('/users/', makeExpressCallback(userController.userSelects));
    router.get('/users/:id', makeExpressCallback(userController.userSelects));
    // Book
    router.get('/books/', makeExpressCallback(bookController.bookSelects));
    router.get('/books/:id', makeExpressCallback(bookController.bookSelects));
    // Record
    router.get('/records/', makeExpressCallback(recordController.recordSelects));

    // POST
    // add new user
    router.post('/users', validate(insertUserSchema), makeExpressCallback(userController.userAdds));
    // add new book
    router.post('/books', validate(insertBookSchema), makeExpressCallback(bookController.bookAdds));
    // book borrow
    router.post('/users/:userId/borrow/:bookId', makeExpressCallback(recordController.bookBorrows));
    // book return
    router.post('/users/:userId/return/:bookId', validate(returnBookSchema), makeExpressCallback(recordController.bookReturns));

    // DELETE
    // delete user
    router.delete('/users/:id', makeExpressCallback(userController.userDeletes));
    // delete book
    router.delete('/books/:id', makeExpressCallback(bookController.bookDeletes));

    return router;
};

export default route;
