import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
   let chaiHttpResponse: Response;

   before(async () => {
    sinon
      .stub(Team, "findByPk")
      .resolves({
        id: 5, 
        teamName: "Cruzeiro"     
       } as Team);
   });

   after(()=>{
     (Team.findByPk as sinon.SinonStub).restore();
  })

 it('Deve retornar um time', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/5');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({
      id: 5, 
      teamName: "Cruzeiro"     
     });
  });
});
