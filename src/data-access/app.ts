/**
 * Database connection
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import dotenv from 'dotenv';
import pg from 'pg';

import connect from './connection';

const conn = connect(dotenv, pg);

export default conn;
