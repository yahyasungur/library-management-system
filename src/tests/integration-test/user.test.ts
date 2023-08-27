import randomstring from 'randomstring';

import route from './user';

describe(`Employees Tests Suites`, () => {
    test(`Select Employees`, async () => {
        const res = await route.selectUser();
        const data = res.status;
        expect(data).toBe(200);
    });

    test(`Add Employees - All fields have value.`, async () => {
        const info = {
            name: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
        };
        const res = await route.addUser(info);
        const data = res.status;
        expect(data).toBe(201);
    });

    test(`Add Employees - Required fields missing.`, async () => {
        const info = {
            name: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
        };
        const res = await route.addUser(info);
        const data = res.response.status;
        expect(data).toBe(400);
    });

    test(`Update Employees - All fields have value.`, async () => {
        const emp = await route.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            name: randomstring.generate({
                length: 12,
                charset: 'alphabetic'
            }), // generate random string
        };

        const res = await route.updateUser(id, info);
        const data = res.status;
        expect(data).toBe(200);
    });

    test(`Update Employees - Required fields are missing.`, async () => {
        const emp = await route.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;
        const info = {
            name: null,
        };

        const res = await route.updateUser(id, info);
        const data = res.response.status;
        expect(data).toBe(400);
    });

    test(`Delete Employees`, async () => {
        const emp = await route.selectUser();
        const employees = emp.data.view;
        const id = employees[employees.length - 1].id;

        const res = await route.removeUser(id);
        const data = res.status;
        expect(data).toBe(200);
    });
});
