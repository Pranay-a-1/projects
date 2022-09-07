import express from 'express';
export const router = express.Router();
import { check, validationResult } from 'express-validator';


router.post('/',
    [check("player1Name", 'Player 1 name must be minimum 5 characters long').isLength({ min: 5 }),
    check("player2Name", 'Player 2 name must be minimum 5 characters long').isLength({ min: 5 })],
    (req, res) => {


        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const alert = errors.array()
            res.render('index', {
                alert
            });
        }

        req.app.locals.player.playerName = req.body.player1Name;

        req.app.locals.player2.playerName = req.body.player2Name;

        res.render('PvPP1Choice', {
            "player1Name": req.app.locals.player.playerName,
        });

    })

router.get('/', (req, res) => {

    res.render('PvPP1Choice', {
        "player1Name": req.app.locals.player.playerName,
    });
});
