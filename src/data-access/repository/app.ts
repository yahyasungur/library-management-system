import conn from '../app';
import models from '../sequelize/models/index';
// ######
import query from './query';
// ######
const libraryDb = query(conn, models);
// ######
export default libraryDb;
