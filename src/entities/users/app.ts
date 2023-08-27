/**
 * User entity
 *
 * Author: Yahya Sungur
 * Date: 26.08.2023
 */

import _ from '../../functions/app'; // functions

import makeUser from './make-user';

const makeUsers = makeUser(_.enc);

const entity = {
    makeUsers
};

export default entity;
