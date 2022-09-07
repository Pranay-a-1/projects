import express from 'express';
export const router = express.Router();
import { check, validationResult } from 'express-validator';
import middleware from './middleware.js';

router.post('/',
    [check("playerName", 'Player name must be minimum 5 characters long').isLength({ min: 5 })],
    middleware,
    (req, res) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const alert = errors.array()
            res.render('index', {
                alert
            });
        }

        req.app.locals.player.playerName = req.body.playerName;

        res.render('singlePlayerGame', {
            // "playerName": req.app.locals.player.playerName,
            "playerName": req.playerName
        });

    });


