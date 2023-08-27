/**
 * Routes
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import express from 'express';
const router = express.Router();
import makeExpressCallback from '../express-callback/app';

import validateAuth from '../middlewares/app';

import route from './routes';

const routes = route(router, makeExpressCallback, validateAuth);
// ###

export = routes;
