import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app.js';

chai.use(chaiHttp);

describe('score.js tests', () => {
    let res;

    beforeEach(async () => {
        res = await chai.request(app).post('/score')
            .send({
                "PlayerChosenMove": 'Rock',
                "playerName": "ThisIsAName",
                "ComputerMove": 'Paper',

            })
    });

    it('test 9) should render score.ejs', () => {
        expect(res).to.have.status(200);
    })
    //passes with ThisIsPlayer1Name
    it('test 10)should contain text PlayerName and Rock when chosen Rock', () => {
        expect(res.text).to.have.string('Player (ThisIsAName) Chose : Rock');
    })

    it('test 11)should contain text Rock when chosen Rock', () => {
        expect(res.text).to.have.string('Chose : Rock');
    })
    //Passing and failing is random for test 10
    it('test 12)should contain text Computer and Paper when chosen Paper', () => {
        expect(res.text).to.have.string('Computer Chose : Paper');
    })

    it('test 13)should contain text Computer Chose', () => {
        expect(res.text).to.have.string('Computer Chose : ');
    })

    it('test 14)should contain text Round Result : ', () => {
        expect(res.text).to.have.string('Round Result : ');
    })

    //cannot read the passed value
    it('test 15)should contain text Player Score', () => {
        expect(res.text).to.have.string('Player (ThisIsAName) Score');
    })

    it('test 16)should contain text Computer Score', () => {
        expect(res.text).to.have.string('Computer Score');
    })

    it('test 17)should contain text Play Again', () => {
        expect(res.text).to.have.string('Play Again, Choose your next move :');
    })


    it('test 18)should contain Rock Paper Scissors buttons with respective values', () => {
        expect(res.text).to.have.string(`value="Rock"`);
        expect(res.text).to.have.string(`value="Paper"`);
        expect(res.text).to.have.string(`value="Scissors"`);
    })


});
