import express from 'express';
export const router = express.Router();

router.get('/', (req, res) => {
    req.app.locals.RoundWinner.PlayerScore = 0;
    req.app.locals.RoundWinner.ComputerScore = 0;
    res.render('index');
})
