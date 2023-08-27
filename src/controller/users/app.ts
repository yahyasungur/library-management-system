/**
 * User Controller
 * @param {Function} userUC - User Use Case
 * @returns {Object} User Controller
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import userUC from '../../use-cases/users/app';

import userAdd from './insert-user';
import userSelect from './select-user';
import userDelete from './delete-user';

const userAdds = userAdd(userUC.addUsers);
const userSelects = userSelect(userUC.selectUsers);
const userDeletes = userDelete(userUC.deleteUsers);

const userController = {
    userAdds,
    userSelects,
    userDeletes
};

export default userController;
