"use strict";
/**
 * Callback function for express
 * @param {Function} controller - Controller function
 * @returns {Function} Callback function
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */
Object.defineProperty(exports, "__esModule", { value: true });
const makeExpressCallback = (controller) => {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                Referer: req.get('referer'),
                'User-Agent': req.get('User-Agent'),
                Cookie: req.get('Authorization'),
                'Access-Control-Allow-Origin': '*'
            }
        };
        controller(httpRequest)
            .then((httpResponse) => {
            if (httpResponse.headers) {
                res.set('Access-Control-Allow-Origin', '*');
                res.set(httpResponse.headers);
            }
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body);
        })
            .catch((e) => res.sendStatus(500));
    };
};
exports.default = makeExpressCallback;
