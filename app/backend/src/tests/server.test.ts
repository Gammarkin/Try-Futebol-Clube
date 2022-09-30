import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import 'dotenv/config';

const PORT = process.env.PORT || 3001;

chai.use(chaiHttp);

const { expect } = chai;

describe('tests main route "/"', () => {
  it('expects PORT to be env or 3001', () => {
    expect(PORT).to.equal(3001);
  });

    it('expects to get a 200 status code', (done) => {
        chai.request(app)
            .get('/')
            .end((_err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });
});
