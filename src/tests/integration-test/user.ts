/**
 * User route integration test
 * Reference: https://github.com/rodentskie
 */

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const url = `${process.env.BASE_URL}:${process.env.TEST_PORT}`;

const routes = () => {
    return Object.freeze({
        selectUser,
        addUser,
        updateUser,
        removeUser
    });

    async function selectUser() {
        try {
            const res = await axios({
                method: 'GET',
                url: `${url}/users`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                }
            });
            return res;
        } catch (e: any) {
            return e;
        }
    }

    async function addUser(info: Object) {
        try {
            const res = await axios({
                method: 'POST',
                url: `${url}/users`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                },
                data: {
                    ...info
                }
            });
            return res;
        } catch (e: any) {
            return e;
        }
    }

    async function updateUser(id: string, info: Object) {
        try {
            const res = await axios({
                method: 'PATCH',
                url: `${url}/users/${id}`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                },
                data: {
                    ...info
                }
            });
            return res;
        } catch (e: any) {
            return e;
        }
    }

    async function removeUser(id: string) {
        try {
            const res = await axios({
                method: 'DELETE',
                url: `${url}/users/${id}`,
                auth: {
                    username: process.env.name!,
                    password: process.env.pass!
                }
            });
            return res;
        } catch (e: any) {
            return e;
        }
    }
};

const route = routes();

export default route;
