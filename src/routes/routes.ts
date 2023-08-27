import userController from '../controller/users/app';
import bookController from '../controller/books/app';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    // GET
    // User
    router.get('/users/', validateAuth, makeExpressCallback(userController.userSelects));
    router.get('/users/:id', validateAuth, makeExpressCallback(userController.userSelects));
    // Book
    router.get('/books/', validateAuth, makeExpressCallback(bookController.bookSelects));
    router.get('/books/:id', validateAuth, makeExpressCallback(bookController.bookSelects));

    // POST
    // add new user
    router.post('/users', validateAuth, makeExpressCallback(userController.userAdds));
    // add new book
    router.post('/books', validateAuth, makeExpressCallback(bookController.bookAdds));

    // DELETE
    // delete user
    router.delete('/users/:id', validateAuth, makeExpressCallback(userController.userDeletes));
    // delete book
    router.delete('/books/:id', validateAuth, makeExpressCallback(bookController.bookDeletes));

    return router;
};

export default route;
