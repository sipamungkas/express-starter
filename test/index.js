/* eslint-disable no-unused-expressions */
const chai = require('chai');
const {expect} = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('API Test', () => {
  it('should GET /', (done) => {
    chai
      .request(app)
      .get('/a')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        done();
      });
  });
});
