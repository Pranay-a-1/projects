import chai, { expect, assert } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server.js';
import crypto from 'crypto';

chai.use(chaiHttp);


describe('registerUser controller tests', () => {
    it('test 16) should have res status 400', async () => {
        const res = await chai.request(app).post('/user/register').send();
        expect(res).to.have.status(400);
    })

    it('test 17) should have res status 201', async () => {
        const res = await chai.request(app).post('/user/register').send({
            "firstName": crypto.randomBytes(5).toString('hex'),
            "lastName": crypto.randomBytes(3).toString('hex'),
            "username": crypto.randomBytes(4).toString('hex'),
            "email": crypto.randomBytes(6).toString('hex') + "@email.com",
            "password": "12345678",
            "confirmPassword": "12345678"
        });
        expect(res).to.have.status(201);
    })


});