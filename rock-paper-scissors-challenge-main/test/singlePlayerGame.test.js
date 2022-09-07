import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('singlePlayerGame.js tests', () => {
    let res;

    beforeEach(async () => {
        res = await chai.request(app).post('/singlePlayerGame').send({
            'playerName': 'ThisIsAName',
        })
    });

    it('test 5) should render singlePlayerGame.ejs ', () => {
        expect(res).to.have.status(200);
    })

    it('test 6)should contain text choose your move', () => {
        expect(res.text).to.have.string('Choose your move');
    })

    it('test 7)should contain Rock Paper Scissors buttons with respective values', () => {
        expect(res.text).to.have.string(`value="Rock"`);
        expect(res.text).to.have.string(`value="Paper"`);
        expect(res.text).to.have.string(`value="Scissors"`);
    })

    it('test 8) should contain name when typed ThisIsAName ', () => {
        expect(res.text).to.have.string('ThisIsAName');
    })

    it('test 33)should contain Lizard and Spock buttons with respective values', () => {
        expect(res.text).to.have.string(`value="Lizard"`);
        expect(res.text).to.have.string(`value="Spock"`);
    })

});
