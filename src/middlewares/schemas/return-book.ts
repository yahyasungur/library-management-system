/**
 * Return book schema
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import Joi from 'joi';

const returnBookSchema = Joi.object({
    score: Joi.number().required()
});

export default returnBookSchema;
