import entity from '../../entities/users/app';
import userDb from '../../data-access/users/app';
import _ from '../../functions/app';
// ####
import addUser from './insert-user';
import selectUser from './select-user';
import deleteUser from './delete-user';
// ####
const addUsers = addUser(entity.makeUsers, userDb);
const selectUsers = selectUser(userDb, _.dec);
const deleteUsers = deleteUser(userDb);
// ####

// user use case
const userUC = {
    addUsers,
    selectUsers,
    deleteUsers
};

export default userUC;
