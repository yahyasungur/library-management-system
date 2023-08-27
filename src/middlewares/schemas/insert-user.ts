/**
 * Insert user schema
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import Joi from 'joi';

const insertUserSchema = Joi.object({
    name: Joi.string().required()
});

export default insertUserSchema;
