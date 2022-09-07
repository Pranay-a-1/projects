import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


// @desc Register new user
// @route POST /signup
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, username, email, password, confirmPassword } = req.body;

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        res.status(400);
        throw new Error('Please add all fields!');
    }

    if (password !== confirmPassword) {
        res.status(400);
        throw new Error('Passwords should match');
    }
    //check if username exists
    const usernameExists = await User.findOne({ username });

    if (usernameExists) {
        res.status(400);
        throw new Error('Username already exists');
    }

    //check if user exists
    const userExists = await User.findOne({ email });



    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create User
    const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            token: generateJWT(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }
});


// @desc Login user
// @route POST /login
// @access Public
const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    //check for user email
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            password: user.password,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: generateJWT(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
});




//Generate JWT
const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

export {
    registerUser, loginUser,
}