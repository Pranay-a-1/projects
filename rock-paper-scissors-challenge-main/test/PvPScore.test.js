import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('PvPScore.js tests', () => {
    let res;

    beforeEach(async () => {
        res = await chai.request(app).post('/PvPScore').send({
            "playerChosenMove": 'Rock',
            "player1Name": "ThisIsPlayer1Name",
            "player2Name": 'ThisIsPlayer2Name',
            "playerChosenMove": 'Paper',
        })
    });

    it('test 25) should render score.ejs', () => {
        expect(res).to.have.status(200);
    })

    it('test 26)should contain text Player1 (ThisIsPlayer1Name) Chose : Rock', () => {
        expect(res.text).to.have.string('Player1 (ThisIsPlayer1Name) Chose : Rock');
    })

    it('test 27)should contain text Player2 (ThisIsPlayer2Name) Chose : Paper', () => {
        expect(res.text).to.have.string('Player2 (ThisIsPlayer2Name) Chose : Paper');
    })

    it('test 28)should contain text Round Result : ', () => {
        expect(res.text).to.have.string('Round Result : ');
    })

    it('test 29)should contain text Player1 Score', () => {
        expect(res.text).to.have.string('Player1 (ThisIsPlayer1Name) Score');
    })

    it('test 30)should contain text Player2 Score', () => {
        expect(res.text).to.have.string('Player1 (ThisIsPlayer1Name) Score');
    })
    //test text has whitespace
    it('test 31)should contain text Play Next Round', () => {
        expect(res.text).to.have.string(`value="PvPNextRound"`);
    })

    it('test 32)should contain text End Game', () => {
        expect(res.text).to.have.string('End Game');
    })

});
