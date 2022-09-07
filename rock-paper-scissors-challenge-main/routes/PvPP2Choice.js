import express from 'express';
export const router = express.Router();


router.post('/', (req, res) => {
    req.app.locals.player.playerChosenMove = req.body.PlayerChosenMove;

    let Player1Move = req.app.locals.player.PlayerChosenMove

    res.render('PvPP2Choice', {
        "player2Name": req.app.locals.player2.playerName,
    });

})

