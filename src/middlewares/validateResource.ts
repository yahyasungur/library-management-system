/**
 * Validate resource middleware
 * @param {Object} schema - schema object
 * @returns {Function} validate
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

// Joi validate method
import { Request, Response, NextFunction } from 'express';
import { AnySchema } from 'joi';

const validate = (schema: AnySchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { error, value } = schema.validate(req.body);
            if (error) {
                console.log(error);
                return res.status(400).send('Invalid request.');
            }
            next();
        } catch (error) {
            console.log(error);
            return res.status(400).send('Invalid request.');
        }
    };
};

export default validate;
