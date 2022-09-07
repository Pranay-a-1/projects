import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';


chai.use(chaiHttp);

describe('PvPP2Choice.js test', () => {
    let res;

    beforeEach(async () => {
        res = await chai.request(app).post('/PvPP2Choice')
            .send({
                "player2Name": "ThisIsPlayer2Name",
            })
    });

    it('test 22) should render PvPP2Choice.ejs ', () => {
        expect(res).to.have.status(200);
    })

    //doesn't render ThisIsPlayer2Name on view in tests
    it('test 23) should contain text player2name and choose your move', () => {

        expect(res.text).to.have.string('ThisIsPlayer2Name');
    })

    it('test 24)should contain Rock Paper Scissors buttons with respective values', () => {
        expect(res.text).to.have.string(`value="Rock"`);
        expect(res.text).to.have.string(`value="Paper"`);
        expect(res.text).to.have.string(`value="Scissors"`);
    })
});