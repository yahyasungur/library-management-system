/**
 * Repository
 * @module Repository
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import conn from '../app';
import models from '../sequelize/models/index';

import query from './query';

const libraryDb = query(conn, models);

export default libraryDb;
