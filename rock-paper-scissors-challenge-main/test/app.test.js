import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('App.js tests', () => {
    it('test 1) should render index.ejs', async () => {
        const res = await chai.request(app).get('/').send();
        expect(res).to.have.status(200);
    })

    it('test 2) should have Rock Paper Scissors in view', async () => {
        const res = await chai.request(app).get('/').send();
        expect(res.text).to.have.string('R-P-S-L-S Game');
    })

    it('test 3) should have Choose Game Mode in view', async () => {
        const res = await chai.request(app).get('/').send();
        expect(res.text).to.have.string('Choose Game Mode');
    })

    it('test 4)should have buttons with game mode options in view', async () => {
        const res = await chai.request(app).get('/').send();
        expect(res.text).to.have.string('Single Player');
        expect(res.text).to.have.string(`value="PvP"`);
    })
});