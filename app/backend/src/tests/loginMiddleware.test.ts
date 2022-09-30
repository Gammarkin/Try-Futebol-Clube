import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('When login fails because email is', () => {
    it('incorrect: API responds with status 401 and correct message', async (done) => {
    const chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'test@test.com', password: 'secret_admin' });

      const { message } = chaiHttpResponse.body;
  
      expect(chaiHttpResponse.status).equal(401);
      expect(message).to.be.equal("Incorrect email or password");
      done();
    });
});
