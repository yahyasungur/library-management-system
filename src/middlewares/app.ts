/**
 * Auth validation middleware for future use
 * @param {Object} auth - auth object
 * @param {Object} dotenv - dotenv object
 * @returns {Function} validateAuth
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import auth from 'basic-auth';
import dotenv from 'dotenv';

import myAuth from './basic-auth';

const validateAuth = myAuth(auth, dotenv);

export default validateAuth;
