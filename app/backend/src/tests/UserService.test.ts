import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { getUsers, findByEmail } from '../services/UserService';

chai.use(chaiHttp);

const { expect } = chai;

describe('tests get users', () => {
    it('should return a list of users', async () => {
        const result = await getUsers();

        expect(result).to.be.an('array');

        expect(result.length).to.equal(2);
        expect(result[0].username).to.equal('Admin');
        expect(result[1].username).to.equal('User');
    });
});

describe('tests get user by email', () => {
    it('should return a user', async () => {
        const user = {
            id: 1,
            username: 'User',
            role: 'user',
            email: 'user@user.com',
            password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        };

        const result = await findByEmail(user.email);

        expect(result).to.be.an('object');
        expect(result?.username).to.equal(user.username);
    });
});
