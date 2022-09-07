import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('PvPP1Choice.js tests', () => {
    let res;

    beforeEach(async () => {
        res = await chai.request(app).post('/PvPP1Choice').send({
            'player1Name': 'ThisIsPlayer1Name',
            'player2Name': 'ThisIsPlayer2Name',
        })
    });

    it('test 19) should render PvPP1Choice.ejs ', () => {
        expect(res).to.have.status(200);
    })

    it('test 20) should contain text player1name and choose your move', () => {
        expect(res.text).to.have.string('ThisIsPlayer1Name, Choose your move');
    })


    it('test 21)should contain Rock Paper Scissors buttons with respective values', () => {
        expect(res.text).to.have.string(`value="Rock"`);
        expect(res.text).to.have.string(`value="Paper"`);
        expect(res.text).to.have.string(`value="Scissors"`);
    })
});