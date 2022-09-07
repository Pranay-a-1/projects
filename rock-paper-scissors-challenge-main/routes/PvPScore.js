import express from 'express';
export const router = express.Router();
import RoundWinner from '../src/RoundWinner.js';


router.post('/', async (req, res) => {


    req.app.locals.player2.playerChosenMove = req.body.PlayerChosenMove;
    let Player2Move = req.app.locals.player2.playerChosenMove;

    let Player1Move = req.app.locals.player.playerChosenMove;
    await req.app.locals.RoundWinner.checkWinner(Player1Move, Player2Move);

    let roundWonBy = req.app.locals.RoundWinner.winningPlayer;

    let Player1Scored = req.app.locals.RoundWinner.PlayerScore;

    let Player2Scored = req.app.locals.RoundWinner.ComputerScore;


    res.render('PvPScore', {
        "player1Name": req.app.locals.player.playerName,

        "playerChosenMove": Player1Move,

        "player2Name": req.app.locals.player2.playerName,

        "player2ChosenMove": Player2Move,

        "roundWinner": roundWonBy == "Player1" ? req.app.locals.player.playerName + " Won" : roundWonBy == "Player2" ? req.app.locals.player2.playerName + " Won" : "Draw",

        "Player1Score": Player1Scored,

        "Player2Score": Player2Scored,

    });

})