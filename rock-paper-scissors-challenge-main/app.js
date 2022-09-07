import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Player from './src/player.js';
import Computer from './src/computer.js';
import RoundWinner from './src/RoundWinner.js';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.locals.player = new Player();
app.locals.player2 = new Player();
app.locals.computer = new Computer();
app.locals.RoundWinner = new RoundWinner();

app.set('view engine', 'ejs');

import { router as indexRouter } from './routes/index.js';
import { router as singlePlayerGameRouter } from './routes/singlePlayerGame.js';
import { router as scoreRouter } from './routes/score.js';
import { router as PvPP1ChoiceRouter } from './routes/PvPP1Choice.js';
import { router as PvPP2ChoiceRouter } from './routes/PvPP2Choice.js';
import { router as PvPScoreRouter } from './routes/PvPScore.js';

app.use(cors());
app.use('/', indexRouter);
app.use('/singlePlayerGame', singlePlayerGameRouter);
app.use('/score', scoreRouter);
app.use('/PvPP1Choice', PvPP1ChoiceRouter);
app.use('/PvPP2Choice', PvPP2ChoiceRouter);
app.use('/PvPScore', PvPScoreRouter);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at ${process.env.HOST}:${process.env.PORT}`)
});

export default app;