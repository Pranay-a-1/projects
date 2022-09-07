import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            //Get token from Header
            token = req.headers.authorization.split(' ')[1];

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //Get user frm the token
            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch (err) {
            console.log(err);
            res.status(401);
            throw new Error('Not authorized')
        }
    }
    else if (req.body.accessToken && req.body.accessToken.startsWith('Bearer')) {
        try {

            //Get token from Header
            token = req.body.accessToken.split(' ')[1];

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //Get user frm the token
            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch (err) {
            console.log(err);
            res.status(401);
            throw new Error('Not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }

});

export default protect;