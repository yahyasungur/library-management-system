import userController from '../../controller/users/app';

const route = (router: any, makeExpressCallback: Function, validateAuth: Function) => {
    // GET
    router.get('/users/', validateAuth, makeExpressCallback(userController.userSelects));
    router.get('/users/:id', validateAuth, makeExpressCallback(userController.userSelects));

    // POST
    // add new employee
    router.post('/users', validateAuth, makeExpressCallback(userController.userAdds));

    // #####
    // DELETE
    router.delete('/users/:id', validateAuth, makeExpressCallback(userController.userDeletes));

    return router;
};

export default route;
