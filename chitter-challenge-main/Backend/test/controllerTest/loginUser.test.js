import chai, { expect, assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server.js';
import crypto from 'crypto';

chai.use(chaiHttp);


describe('loginUser controller tests', () => {
    it('test 18) should have res status 400', async () => {
        const res = await chai.request(app).post('/user/login').send();
        expect(res).to.have.status(400);
    })

    it('test 19) should have res status 200', async () => {
        const res = await chai.request(app).post('/user/login').send({
            "email": "01@email.com",
            "password": "12345678",
        });
        expect(res).to.have.status(200);
    })


});