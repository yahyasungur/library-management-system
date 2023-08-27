import entity from '../../entities/users/app';
import libraryDb from '../../data-access/repository/app';
import _ from '../../functions/app';
// ####
import addUser from './insert-user';
import selectUser from './select-user';
import deleteUser from './delete-user';
// ####
const addUsers = addUser(entity.makeUsers, libraryDb);
const selectUsers = selectUser(libraryDb, _.dec);
const deleteUsers = deleteUser(libraryDb);
// ####

// user use case
const userUC = {
    addUsers,
    selectUsers,
    deleteUsers
};

export default userUC;
