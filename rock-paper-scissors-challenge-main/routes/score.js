import express from 'express';
export const router = express.Router();

router.post('/', (req, res) => {
    req.app.locals.player.PlayerChosenMove = req.body.PlayerChosenMove;

    let PlayerMove = req.app.locals.player.PlayerChosenMove;

    req.app.locals.computer.computerChoice();

    let computerChoice = req.app.locals.computer.randomComputerChosenMove;

    req.app.locals.RoundWinner.checkWinner(PlayerMove, computerChoice);

    let roundWonBy = req.app.locals.RoundWinner.winningMessage;

    let playerScore = req.app.locals.RoundWinner.PlayerScore;
    let computerScore = req.app.locals.RoundWinner.ComputerScore;

    res.status(200);



    res.render('score', {

        "playerName": req.app.locals.player.playerName,

        "PlayerChosenMove": PlayerMove,

        "ComputerMove": computerChoice,

        "roundWinner": roundWonBy,

        "PlayerScore": playerScore,

        "ComputerScore": computerScore
    });
})