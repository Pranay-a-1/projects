import asyncHandler from 'express-async-handler';
import Peep from '../models/peepModel.js'
import User from '../models/userModel.js'

// @desc Get all peeps
// @route GET /home
// @access Public
const allPeeps = asyncHandler(async (req, res) => {
    const peeps = await Peep.find({}).sort('-createdAt').populate({ path: 'user', select: ['firstName', 'lastName', 'username'] });
    res.json(peeps)
});


// @desc post new peep
// @route POST /new-peep
// @access Private
const newPeep = asyncHandler(async (req, res) => {
    if (!req.body.peepText) {
        res.status(400);
        throw new Error(`add text to add new Peep `);
    } else {
        const peep = await Peep.create({
            peepText: req.body.peepText,
            user: req.user.id,
            taggedUsername: req.body.taggedUsername ? req.body.taggedUsername : "",
        })
        const taggedUsernameEmail = await User.findOne({ username: req.body.taggedUsername.substring(1) }, { email: 1 });
        console.log(taggedUsernameEmail.email);
        if (req.body.taggedUsername) {
            const taggedUsernameEmail = await User.findOne({ username: req.body.taggedUsername.substring(1) }, { email: 1 });
            sendEmailToTag(taggedUsernameEmail.email);
        }
        res.status(200).json(peep);
    }
});


export {
    allPeeps,
    newPeep,
}