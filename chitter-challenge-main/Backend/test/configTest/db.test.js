import chai, { expect, assert } from 'chai';
import connectDB from '../../config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

chai.use(assert);


describe('App.js tests', async () => {
    it('test 14) should connect to DB', async () => {
        await expect(connectDB()).to.not.be.an.instanceof(Error);
    })

    it('test 15) should not connect to DB', async () => {

        const actual = await connectDB().catch((error) => {
            assert.equal(error.message, 'not found')
        })

    })

});