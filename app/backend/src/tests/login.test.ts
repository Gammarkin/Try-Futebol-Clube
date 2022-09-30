import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('tests login route "/login"', () => {
    describe('test when the body is non existent', () => {
        it('expects to get a 400 status code', (done) => {
            chai.request(app)
                .post('/login')
                .end((_err, res) => {
                    expect(res.status).to.equal(400);
                    done();
                });
        });
    });
});
